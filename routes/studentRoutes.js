import { customRouter } from '../controllers/sharedController.js';
import { addNewStudent, fetchStudents, updateStudentDetails, updateStudentStatus, viewStudentDetails } from '../controllers/studentController.js';
import { profileImageUploadMiddleware } from '../middlewares/middlewares.js';
const studentRouter = customRouter()

studentRouter
    .get('/', fetchStudents)  // GET school students
    .get('/:student_id/view-student-details', viewStudentDetails)  // GET details for a specific student
    .post('/add-new-student', profileImageUploadMiddleware, addNewStudent)  // POST to add a new student
    .post('/:student_id/update-student', profileImageUploadMiddleware, updateStudentDetails)  // POST to update a specific student
    .post('/:student_id/update-student-status', updateStudentStatus);  // POST to update student status


export default studentRouter;
