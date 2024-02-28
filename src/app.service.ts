import { Injectable } from "@nestjs/common";
import sql from "./database.service";

@Injectable()
export class AppService {
  async getHello() {
    const users = await sql`
    select
      *
    from users
    limit 10
  `
  return users
  }
}
