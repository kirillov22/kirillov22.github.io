import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public gitCheckout = 'git checkout 7c7a04197e2a0f655de104e5b9bb862e417cfcb7';

  public expectedStudentResponse = '[{"id":1,"name":"bill","dateOfBirth":{"year":1990,"month":3,"day":4},"enrolledClasses":[],"averageGpa":0.1}]';

  public studentById = 'GET /students/{id}';

  public studentControllerTestCase = 'class StudentControllerTestCase {\n' +
    '\n' +
    '    @MockK\n' +
    '    private lateinit var studentRepository: StudentRepository\n' +
    '\n' +
    '    @MockK\n' +
    '    private lateinit var studentService: StudentService\n' +
    '\n' +
    '    @Before\n' +
    '    fun setUp() {\n' +
    '        MockKAnnotations.init(this)\n' +
    '        every { studentService.getStudents() } returns getTestStudents()\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should return all students when GET request is made to students endpoint`() {\n' +
    '        withTestApplication(configure()) {\n' +
    '            handleRequest(HttpMethod.Get, "/students").apply {\n' +
    '                assertThat(response.status()).isEqualTo(HttpStatusCode.OK)\n' +
    '                val expectedStudents = getTestStudents()\n' +
    '                val rawResponse = response.content ?: ""\n' +
    '                val actualStudents = Json.decodeFromString<List<Student>>(rawResponse)\n' +
    '                assertThat(actualStudents).isEqualTo(expectedStudents)\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    private fun configure(): Application.() -> Unit = {\n' +
    '        install(ContentNegotiation) {\n' +
    '            json()\n' +
    '        }\n' +
    '        di {\n' +
    '            bind { singleton { studentRepository }}\n' +
    '            bind { singleton { studentService } }\n' +
    '        }\n' +
    '        configureRouting()\n' +
    '    }\n' +
    '\n' +
    '    private fun getTestStudents(): List<Student> {\n' +
    '        val birthDate1 = LocalDate(1990, 3, 4)\n' +
    '        val birthDate2 = LocalDate(1992, 7, 18)\n' +
    '        val student1 = Student(321, "Bill", birthDate1, emptyList(), 0.0)\n' +
    '        val subjects = listOf(Subject(SubjectName.COMPUTER_SCIENCE, 5.5f), Subject(SubjectName.MUSIC, 4.8f))\n' +
    '        val student2 = Student(123, "Alice", birthDate2, subjects, 5.15)\n' +
    '        return listOf(student1, student2)\n' +
    '    }\n' +
    '}';

  public studentController = 'class StudentController(application: Application) : AbstractDIController(application) {\n' +
    '    private val studentService: StudentService by instance()\n' +
    '\n' +
    '    override fun Route.getRoutes() {\n' +
    '        route("/students") {\n' +
    '            get {\n' +
    '                call.respond(studentService.getStudents())\n' +
    '            }\n' +
    '\n' +
    '            get("{id}") {\n' +
    '                TODO()\n' +
    '            }\n' +
    '\n' +
    '            post {\n' +
    '                TODO()\n' +
    '            }\n' +
    '\n' +
    '            put("{id}") {\n' +
    '                TODO()\n' +
    '            }\n' +
    '\n' +
    '            delete {\n' +
    '                TODO()\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '}';

  public studentByIdTests = '// setup code to add \n' +
    '    every { studentService.getStudentById(any()) } returns getTestStudent()\n' +
    '// test code to add \n' +
    '    @Test\n' +
    '    fun `should return a single student when GET request is made to students endpoint with a valid id`() {\n' +
    '        withTestApplication(configure()) {\n' +
    '            handleRequest(HttpMethod.Get, "/students/123").apply {\n' +
    '                assertThat(response.status()).isEqualTo(HttpStatusCode.OK)\n' +
    '                val expectedStudent = getTestStudent()\n' +
    '                val rawResponse = response.content ?: ""\n' +
    '                val actualStudent = Json.decodeFromString<Student>(rawResponse)\n' +
    '                assertThat(actualStudent).isEqualTo(expectedStudent)\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should return a 404 status code when GET request is made to students endpoint with an id that does not match any students`() {\n' +
    '        every { studentService.getStudentById(any()) } returns null\n' +
    '        withTestApplication(configure()) {\n' +
    '            handleRequest(HttpMethod.Get, "/students/999").apply {\n' +
    '                assertThat(response.status()).isEqualTo(HttpStatusCode.NotFound)\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should return a 400 status code when GET request is made to students endpoint with an id that is not an integer`() {\n' +
    '        withTestApplication(configure()) {\n' +
    '            handleRequest(HttpMethod.Get, "/students/abc").apply {\n' +
    '                every { studentService.getStudentById(any()) } returns null\n' +
    '                assertThat(response.status()).isEqualTo(HttpStatusCode.BadRequest)\n' +
    '            }\n' +
    '        }\n' +
    '    }';


  public studentByIdCode = 'get("{id}") {\n' +
    '        val id = call.parameters["id"]?.toIntOrNull()\n' +
    '\n' +
    '        if (id == null) {\n' +
    '            call.respond(HttpStatusCode.BadRequest)\n' +
    '            return@get\n' +
    '        }\n' +
    '\n' +
    '        studentService.getStudentById(id)?.let {\n' +
    '             call.respond(it)\n' +
    '             return@get\n' +
    '        }\n' +
    '\n' +
    '        call.respond(HttpStatusCode.NotFound)\n' +
    '}';

  public addStudent = 'POST /students';

  public addStudentTests = '    @Test\n' +
    '    fun `should return a 201 status code when POST request is made to students endpoint that matches the expected api spec`() {\n' +
    '        every { studentService.addStudent(any()) } returns 123\n' +
    '        withTestApplication(configure()) {\n' +
    '            handleRequest(HttpMethod.Post, "/students") {\n' +
    '                addHeader("content-type", "application/json")\n' +
    '                setBody(getValidAddStudent())\n' +
    '            }.apply {\n' +
    '                assertThat(response.status()).isEqualTo(HttpStatusCode.Created)\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should return the new student id when POST request is made to students endpoint that matches the expected api spec`() {\n' +
    '        every { studentService.addStudent(any()) } returns 123\n' +
    '        withTestApplication(configure()) {\n' +
    '            handleRequest(HttpMethod.Post, "/students") {\n' +
    '                addHeader("content-type", "application/json")\n' +
    '                setBody(getValidAddStudent())\n' +
    '            }.apply {\n' +
    '                assertThat(response.status()).isEqualTo(HttpStatusCode.Created)\n' +
    '                val rawResponse = response.content ?: ""\n' +
    '                val addStudentResponse = Json.decodeFromString<AddStudentResponse>(rawResponse)\n' +
    '                assertThat(addStudentResponse.id).isEqualTo(123)\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should return a 400 status code when POST request is made to students endpoint that does not the expected api spec`() {\n' +
    '        every { studentService.addStudent(any()) } returns 123\n' +
    '        withTestApplication(configure()) {\n' +
    '            handleRequest(HttpMethod.Post, "/students") {\n' +
    '                addHeader("content-type", "application/json")\n' +
    '                setBody(getInvalidAddStudent())\n' +
    '            }.apply {\n' +
    '                assertThat(response.status()).isEqualTo(HttpStatusCode.BadRequest)\n' +
    '            }\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    private fun getValidAddStudent(): String {\n' +
    '        return "{\\n" +\n' +
    '                "    \\"name\\": \\"Tom Banks\\",\\n" +\n' +
    '                "    \\"dateOfBirth\\": \\"2021-11-04\\",\\n" +\n' +
    '                "    \\"enrolledClasses\\": [],\\n" +\n' +
    '                "    \\"averageGpa\\": \\"0.0\\"\\n" +\n' +
    '                "}"\n' +
    '    }\n' +
    '\n' +
    '    private fun getInvalidAddStudent(): String {\n' +
    '        return "{\\n" +\n' +
    '                "    \\"name\\": \\"Tom Banks\\",\\n" +\n' +
    '                "    \\"dateOfBirth\\": \\"2021-aa-04\\",\\n" +\n' +
    '                "    \\"enrolledClasses\\": [],\\n" +\n' +
    '                "    \\"averageGpa\\": \\"ccc\\"\\n" +\n' +
    '                "}"\n' +
    '    }\n';

  public addStudentService = '    fun addStudent(student: AddStudentRequest): Int {\n' +
    '        TODO()\n' +
    '    }';

  public addStudentModel = 'package nz.kirillov.model\n' +
    '\n' +
    'import kotlinx.datetime.LocalDate\n' +
    'import kotlinx.datetime.serializers.LocalDateIso8601Serializer\n' +
    'import kotlinx.serialization.Serializable\n' +
    '\n' +
    '@Serializable\n' +
    'data class AddStudentRequest(\n' +
    '    val name: String,\n' +
    '    @Serializable(with = LocalDateIso8601Serializer::class)\n' +
    '    val dateOfBirth: LocalDate,\n' +
    '    val enrolledClasses: List<Subject>,\n' +
    '    val averageGpa: Double\n' +
    ')\n' +
    '\n' +
    '@Serializable\n' +
    'data class AddStudentResponse(val id: Int)\n';


  public addStudentCode = '            post {\n' +
    '                val student: AddStudentRequest\n' +
    '                try {\n' +
    '                    student = call.receive()\n' +
    '                } catch (e: Exception) {\n' +
    '                    println(e)\n' +
    '                    call.respond(HttpStatusCode.BadRequest, e.message ?: "Bad Request")\n' +
    '                    return@post\n' +
    '                }\n' +
    '\n' +
    '                val newId = studentService.addStudent(student)\n' +
    '                call.respond(HttpStatusCode.Created, AddStudentResponse(newId))\n' +
    '            }';

  public updateAndDeleteStudent = 'PUT /students/{id} and DELETE /students/{id}';

  public studentServiceTestCaseCode = 'class StudentServiceTestCase {\n' +
    '\n' +
    '    @MockK\n' +
    '    private lateinit var studentRepository: StudentRepository\n' +
    '\n' +
    '    private lateinit var service: StudentService\n' +
    '\n' +
    '    @Before\n' +
    '    fun setUp() {\n' +
    '        MockKAnnotations.init(this)\n' +
    '        service = StudentService(studentRepository)\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should return all students when getting all students and there are students`() {\n' +
    '        val expectedStudents = getTestStudents()\n' +
    '        every { studentRepository.getStudents() } returns getTestStudents()\n' +
    '\n' +
    '        val result = service.getStudents()\n' +
    '        assertThat(result).isEqualTo(expectedStudents)\n' +
    '        verify { studentRepository.getStudents() }\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should return empty collection of students when getting all students and there are no students`() {\n' +
    '        every { studentRepository.getStudents() } returns emptyList()\n' +
    '\n' +
    '        val result = service.getStudents()\n' +
    '\n' +
    '        assertThat(result).isEmpty()\n' +
    '        verify { studentRepository.getStudents() }\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should call repository when getting a single student`() {\n' +
    '        val expectedStudent = getTestStudent()\n' +
    '        every { studentRepository.getStudentById(any()) } returns expectedStudent\n' +
    '\n' +
    '        val result = service.getStudentById(123)\n' +
    '\n' +
    '        assertThat(result).isEqualTo(expectedStudent)\n' +
    '        verify { studentRepository.getStudentById(123) }\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should return null when getting a single student that does not exist`() {\n' +
    '        every { studentRepository.getStudentById(any()) } returns null\n' +
    '\n' +
    '        val result = service.getStudentById(123)\n' +
    '\n' +
    '        assertThat(result).isNull()\n' +
    '        verify { studentRepository.getStudentById(123) }\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should return the next highest id for a student when adding a new student`() {\n' +
    '        val testStudent = getTestStudent()\n' +
    '        val addStudentRequest = AddStudentRequest(testStudent.name, testStudent.dateOfBirth, testStudent.enrolledClasses, testStudent.averageGpa)\n' +
    '        val nextStudentId = 322\n' +
    '        every { studentRepository.addStudent(any()) } returns nextStudentId\n' +
    '\n' +
    '        val result = service.addStudent(addStudentRequest)\n' +
    '\n' +
    '        assertThat(result).isEqualTo(nextStudentId)\n' +
    '        verify { studentRepository.addStudent(addStudentRequest) }\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should call repository when updating a student`() {\n' +
    '        val studentId = 123\n' +
    '        val updateStudentRequest = getUpdatedStudent(studentId).first\n' +
    '        val updatedStudent = getUpdatedStudent(studentId).second\n' +
    '        every { studentRepository.getStudentById(123) } returns getTestStudent()\n' +
    '        every { studentRepository.updateStudent(any()) } returns updatedStudent\n' +
    '\n' +
    '        service.updateStudent(studentId, updateStudentRequest)\n' +
    '\n' +
    '        verify { studentRepository.updateStudent(updatedStudent) }\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should update student fields correctly when updating a student`() {\n' +
    '        val studentId = 123\n' +
    '        val updateStudentRequest = getUpdatedStudent(studentId).first\n' +
    '        val updatedStudent = getUpdatedStudent(studentId).second\n' +
    '        every { studentRepository.getStudentById(123) } returns getTestStudent()\n' +
    '        every { studentRepository.updateStudent(any()) } returns updatedStudent\n' +
    '\n' +
    '        val result = service.updateStudent(studentId, updateStudentRequest)\n' +
    '\n' +
    '        assertThat(result.name).isEqualTo("Timothy")\n' +
    '        assertThat(result.dateOfBirth).isEqualTo(LocalDate(2001, 12, 12))\n' +
    '        assertThat(result.enrolledClasses).isEqualTo(UPDATED_SUBJECTS)\n' +
    '        assertThat(result.averageGpa).isEqualTo(3.0)\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should re-calculate student GPA when student is updated`() {\n' +
    '        val studentId = 123\n' +
    '        val updateStudentRequest = getUpdatedStudent(studentId).first\n' +
    '        val updatedStudent = getUpdatedStudent(studentId).second\n' +
    '        every { studentRepository.getStudentById(123) } returns getTestStudent()\n' +
    '        every { studentRepository.updateStudent(any()) } returns updatedStudent\n' +
    '\n' +
    '        val result = service.updateStudent(studentId, updateStudentRequest)\n' +
    '\n' +
    '        assertThat(result.averageGpa).isEqualTo(3.0)\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should throw error when trying to update a student that does not exist`() {\n' +
    '        val studentId = 123\n' +
    '        val updateStudentRequest = getUpdatedStudent(studentId).first\n' +
    '        every { studentRepository.getStudentById(studentId) } returns null\n' +
    '\n' +
    '        assertThrows(StudentDoesNotExistException::class.java) {\n' +
    '            service.updateStudent(studentId, updateStudentRequest)\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should call repository when deleting a student`() {\n' +
    '        val studentId = 123\n' +
    '        every { studentRepository.deleteStudent(any()) } returns Unit\n' +
    '\n' +
    '        service.deleteStudent(studentId)\n' +
    '\n' +
    '        verify { studentRepository.deleteStudent(studentId) }\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should throw error if student does not exist when trying to delete student`() {\n' +
    '        val studentId = 123\n' +
    '        every { studentRepository.deleteStudent(any()) } throws StudentDoesNotExistException()\n' +
    '\n' +
    '        assertThrows(StudentDoesNotExistException::class.java) {\n' +
    '            service.deleteStudent(studentId)\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    private fun getTestStudents(): List<Student> {\n' +
    '        val student1 = getTestStudent()\n' +
    '        val birthDate2 = LocalDate(1992, 7, 18)\n' +
    '\n' +
    '        val subjects = listOf(Subject(SubjectName.COMPUTER_SCIENCE, 5.5f), Subject(SubjectName.MUSIC, 4.8f))\n' +
    '        val student2 = Student(321, "Alice", birthDate2, subjects, 5.15)\n' +
    '        return listOf(student1, student2)\n' +
    '    }\n' +
    '\n' +
    '    private fun getUpdatedStudent(id: Int): Pair<UpdateStudentRequest, Student> {\n' +
    '        val name = "Timothy"\n' +
    '        val updatedBirthDate = LocalDate(2001, 12, 12)\n' +
    '        val subjects = UPDATED_SUBJECTS\n' +
    '        val averageGpa = subjects.map{it.grade}.average()\n' +
    '\n' +
    '        val student = Student(id, name, updatedBirthDate, subjects, averageGpa)\n' +
    '        return Pair(UpdateStudentRequest(name, updatedBirthDate, subjects), student)\n' +
    '    }\n' +
    '\n' +
    '    private fun getTestStudent(): Student {\n' +
    '        val birthDate1 = LocalDate(1990, 3, 4)\n' +
    '        return Student(123, "Bill", birthDate1, emptyList(), 0.0)\n' +
    '    }\n' +
    '\n' +
    '    companion object {\n' +
    '        val UPDATED_SUBJECTS = listOf(\n' +
    '            Subject(SubjectName.BIOLOGY, 2.0f),\n' +
    '            Subject(SubjectName.ASTRONOMY, 4.0f),\n' +
    '            Subject(SubjectName.PHYSICS, 3.0f)\n' +
    '        )\n' +
    '    }\n' +
    '}';

  public studentServiceCode = 'class StudentService(private val repository: StudentRepository) {\n' +
    '\n' +
    '    fun getStudents(): List<Student> {\n' +
    '        return repository.getStudents()\n' +
    '    }\n' +
    '\n' +
    '    fun getStudentById(id: Int): Student? {\n' +
    '        return repository.getStudentById(id)\n' +
    '    }\n' +
    '\n' +
    '    fun addStudent(student: AddStudentRequest): Int {\n' +
    '        return repository.addStudent(student)\n' +
    '    }\n' +
    '\n' +
    '    fun updateStudent(studentId: Int, updatedStudent: UpdateStudentRequest): Student {\n' +
    '        repository.getStudentById(studentId) ?: throw StudentDoesNotExistException("Student with id: $studentId does not exist")\n' +
    '\n' +
    '        val averageGpa = updatedStudent.enrolledClasses.map{ it.grade }.average()\n' +
    '        val student = Student(studentId, updatedStudent.name, updatedStudent.dateOfBirth, updatedStudent.enrolledClasses, averageGpa)\n' +
    '        return repository.updateStudent(student)\n' +
    '    }\n' +
    '\n' +
    '    fun deleteStudent(id: Int) {\n' +
    '        repository.deleteStudent(id)\n' +
    '    }\n' +
    '}';

  public studentRepositoryTestCaseCode = 'class StudentRepositoryTestCase {\n' +
    '\n' +
    '    private lateinit var repository: StudentRepository\n' +
    '\n' +
    '    @Before\n' +
    '    fun setUp() {\n' +
    '        resetTestFile()\n' +
    '        repository = StudentRepository()\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should return all students when getting all students and there are students`() {\n' +
    '        val expectedStudents = getTestStudents()\n' +
    '        writeDataToFile(expectedStudents)\n' +
    '\n' +
    '        val actualStudents = repository.getStudents()\n' +
    '        assertThat(actualStudents).isEqualTo(expectedStudents)\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should return no students when getting all students and there are no students`() {\n' +
    '        val actualStudents = repository.getStudents()\n' +
    '\n' +
    '        assertThat(actualStudents).isEmpty()\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should return correct student when getting a student by id`() {\n' +
    '        val expectedStudent = getTestStudent()\n' +
    '        writeDataToFile(listOf(expectedStudent))\n' +
    '\n' +
    '        val actualStudent = repository.getStudentById(expectedStudent.id)\n' +
    '        assertThat(actualStudent).isNotNull\n' +
    '        assertThat(actualStudent).isEqualTo(expectedStudent)\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should return null when getting a student by id that does not exist`() {\n' +
    '        writeDataToFile(listOf(getTestStudent()))\n' +
    '\n' +
    '        val actualStudent = repository.getStudentById(NON_EXISTENT_STUDENT_ID)\n' +
    '        assertThat(actualStudent).isNull()\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should return next highest id when adding a student`() {\n' +
    '        val students = getTestStudents()\n' +
    '        writeDataToFile(students)\n' +
    '        val lastId = students.last().id\n' +
    '        val expectedNewId = lastId + 1\n' +
    '\n' +
    '        val studentToAdd = getAddStudentRequest()\n' +
    '\n' +
    '        val actualNewId = repository.addStudent(studentToAdd)\n' +
    '        assertThat(actualNewId).isEqualTo(expectedNewId)\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should update student when student exists`() {\n' +
    '        val students = getTestStudents()\n' +
    '        writeDataToFile(students)\n' +
    '        val oldStudent = students.last()\n' +
    '\n' +
    '        val newName = "Phillip Morrison"\n' +
    '        val newDateOfBirth = LocalDate(1998, 5, 5)\n' +
    '        val studentToUpdateTo = Student(oldStudent.id, newName, newDateOfBirth, oldStudent.enrolledClasses, oldStudent.averageGpa)\n' +
    '\n' +
    '        val updatedStudent = repository.updateStudent(studentToUpdateTo)\n' +
    '        assertThat(updatedStudent).isEqualTo(studentToUpdateTo)\n' +
    '\n' +
    '        val updatedStudentFromRepository = repository.getStudentById(oldStudent.id)\n' +
    '        assertThat(updatedStudentFromRepository).isNotNull\n' +
    '        assertThat(updatedStudentFromRepository).isEqualTo(updatedStudent)\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should throw error when trying to update student that does not exist`() {\n' +
    '        val newName = "Phillip Morrison"\n' +
    '        val newDateOfBirth = LocalDate(1998, 5, 5)\n' +
    '        val studentToUpdateTo = Student(NON_EXISTENT_STUDENT_ID, newName, newDateOfBirth, emptyList(), 0.0)\n' +
    '\n' +
    '        assertThrows(StudentDoesNotExistException::class.java) {\n' +
    '            repository.updateStudent(studentToUpdateTo)\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should delete student when given student exists`() {\n' +
    '        val students = getTestStudents()\n' +
    '        writeDataToFile(students)\n' +
    '        val studentToDelete = students.last()\n' +
    '\n' +
    '        repository.deleteStudent(studentToDelete.id)\n' +
    '        val actualStudent = repository.getStudentById(studentToDelete.id)\n' +
    '        assertThat(actualStudent).isNull()\n' +
    '    }\n' +
    '\n' +
    '    @Test\n' +
    '    fun `should throw error when trying to delete student that does not exist`() {\n' +
    '        assertThrows(StudentDoesNotExistException::class.java) {\n' +
    '            repository.deleteStudent(NON_EXISTENT_STUDENT_ID)\n' +
    '        }\n' +
    '    }\n' +
    '\n' +
    '    private fun resetTestFile() {\n' +
    '        val writer = getStudentFileWriter()\n' +
    '        writer.write("[]")\n' +
    '        writer.close()\n' +
    '    }\n' +
    '\n' +
    '    private fun getStudentFileWriter(): FileWriter {\n' +
    '        return FileWriter(this::class.java.classLoader.getResource("students.json")!!.file)\n' +
    '    }\n' +
    '\n' +
    '    private fun writeDataToFile(students: List<Student>) {\n' +
    '        val writer = getStudentFileWriter()\n' +
    '        val data = Json.encodeToString(students)\n' +
    '\n' +
    '        writer.write(data)\n' +
    '        writer.close()\n' +
    '    }\n' +
    '\n' +
    '    private fun getAddStudentRequest(): AddStudentRequest {\n' +
    '        return AddStudentRequest("Bilbo Baggins", LocalDate(1892, 1, 3), listOf(Subject(SubjectName.GEOGRAPHY,  9.0f)), 9.0)\n' +
    '    }\n' +
    '\n' +
    '    companion object {\n' +
    '        const val NON_EXISTENT_STUDENT_ID = 999999\n' +
    '    }\n' +
    '}';

  constructor() { }

  ngOnInit(): void {
  }

}
