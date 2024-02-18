import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interfaces';
import { dummyData } from './dummyData';

@Injectable()
export class AppService {
  getUser(): User[] {
    return dummyData;
  }

  getUserDetail(id: number): User[] {
    const result = dummyData.filter((e) => e.id == id);
    return result;
  }

  createUser(user: User): User {
    user.id = Math.floor(Math.random() * 1000) + 1;
    dummyData.push(user);
    return user;
  }

  updateUser(id: number, updateUser: Partial<User>): User | string {
    const index = dummyData.findIndex((user) => user.id === Number(id));
    if (index !== -1) {
      dummyData[index] = { ...dummyData[index], ...updateUser };
      return dummyData[index];
    } else {
      return 'Gagal melakukan update atau id tidak dikenali';
    }
  }

  deleteUser(id: number): User | string {
    const indexUser = dummyData.findIndex((user) => user.id === Number(id));
    if (indexUser !== -1) {
      const result: User = dummyData[indexUser];
      dummyData.splice(indexUser, 1);
      return result;
    } else {
      return 'Tidak ditemukan data dengan ID tersebut';
    }
  }
}
