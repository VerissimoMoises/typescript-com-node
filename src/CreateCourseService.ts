interface Course{
    name: string;
    duration?: number;
    educator: string
}

class CreateCourseService {

    execute({duration, educator, name}: Course){
        console.log(name, duration = 8, educator)
    }
}

export default new CreateCourseService();