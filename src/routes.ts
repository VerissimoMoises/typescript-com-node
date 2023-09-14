import { Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';

export function CreateCourse(request: Request, response: Response){

    CreateCourseService.execute({
        name: "nodeJS",
        duration: 10,
        educator: "Dani"
    });

    CreateCourseService.execute({
        name: "ReactJS",
        educator: "Diego"
    });

    return response.send();
}