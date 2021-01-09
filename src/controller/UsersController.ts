import { Controller, Route, Get, Path, Query, Post, Header, Body, Response } from 'tsoa';
import User from '../model/user';
@Route("users")
export class UsersController extends Controller {
    /**
     * API to get User by userId
     * @param userId sample for path param
     */
    @Get("/{userId}")
    public async getUser(
        @Path() userId: number
    ): Promise<User> {
        return { userId: userId, name: "abc", email: "abc@gmail.com" };
    }
    /**
     * API to create User
     * @param requestBody sample for request body
     * @minLength mail 3 must be > 3 letters
     * @param mail sample for query param 
     * @param someOptionalHeader sample for Header and it is optional
     */
    @Response('201', 'created')
    @Post("/")
    public async createUser(@Body() requestBody: User, @Query() mail: string, @Header('some-header') someOptionalHeader?: string): Promise<User> {
        /*Business Logic*/
        this.setStatus(201);
        return { userId: 1, name: "abc", email: mail };
    }
}