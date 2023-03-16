import { Person } from "../models/person.model";

export class User{
  id?: number;
  email?: string;
  password?: string;
  person?: Person;
}
