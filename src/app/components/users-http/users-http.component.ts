
import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faEdit, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users-http',
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './users-http.component.html',
  styleUrl: './users-http.component.css'
})
export class UsersHttpComponent {
  faCheck = faCheck;
  faEdit = faEdit;
  faTimes = faTimes;
  faTrash = faTrash;

  isLoading = false;
   employees:any[] = [];

  newUser = {
    id : null,
    name: '',
    email: '',
    department: '',
    
  }
  editingUserId: number | null = null;
fieldToEdit: string = '';     // e.g., 'name' or 'department'
editedValue: string = '';     // new value

startEditing(userId: number, field: string, currentValue: string) {
  this.editingUserId = userId;
  this.fieldToEdit = field;
  this.editedValue = currentValue;
}

cancelEdit() {
  this.editingUserId = null;
  this.fieldToEdit = '';
  this.editedValue = '';
}
  constructor(private usersService: UsersService) { }
  ngOnInit(){
    this.loadUsers();
  }

  loadUsers()
  {
     this.usersService.getUsersData().subscribe((response) => {
      this.employees = response as any[];
      console.log(this.employees);
     });
  }
 deleteUser(id: number)
 {
  this.usersService.deleteUsersData(id).subscribe(() => {
    
    this.employees = this.employees.filter(emp => emp.id !== id); // Reload the users after deletion
  })
 }

 addUser(newUser: any)
 {
    // Check if ID already exists
  const isDuplicateId = this.employees.some(emp => emp.id === this.newUser.id);

  if (isDuplicateId) {
     Swal.fire('Error', `User with ID: ${this.newUser.id} already exists!`, 'error');
    return;

  }

  // Basic form validation
  if (
    this.newUser.id &&
    this.newUser.name.trim() &&
    this.newUser.email.trim() &&
    this.newUser.department.trim()
  ) {
    this.usersService.addUsersData(this.newUser).subscribe((data) => {
      this.employees.push(data as any);
      this.newUser = { id: null, name: '', email: '', department: '' };
    });
  } else {
    alert('Please fill all fields!');
  }
}

EditUsers() {
  if (this.fieldToEdit && this.editedValue.trim()) {
    const updatedUser = { [this.fieldToEdit]: this.editedValue };

    if (this.editingUserId !== null) {
      this.usersService.updateUsersData(this.editingUserId, updatedUser).subscribe(() => {
        const index = this.employees.findIndex(emp => emp.id === this.editingUserId);
        if (index !== -1) {
          this.employees[index] = {
            ...this.employees[index],
            [this.fieldToEdit]: this.editedValue
          };
        }

        Swal.fire('Success', 'User updated successfully!', 'success');
        this.cancelEdit();
      });
    }
  } else {
    Swal.fire('Error', 'Please enter a value to edit!', 'error');
  }
}
}
