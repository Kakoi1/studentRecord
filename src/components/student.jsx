import View from './View'

export default function Student(){
    let num =1;
    let nums =1;
    const students =   [
  { name: 'Alice', department: 'Science', finalGrade: 85, status: 'Pass' },
  { name: 'Bob', department: 'Arts', finalGrade: 72, status: 'Pass' },
  { name: 'Charlie', department: 'Commerce', finalGrade: 88, status: 'Pass' },
  { name: 'Diana', department: 'Science', finalGrade: 91, status: 'Pass' },
  { name: 'Edward', department: 'Arts', finalGrade: 95, status: 'Pass' },
  { name: 'Fiona', department: 'Commerce', finalGrade: 79, status: 'Pass' },
  { name: 'George', department: 'Science', finalGrade: 82, status: 'Pass' },
  { name: 'Hannah', department: 'Arts', finalGrade: 90, status: 'Pass' },
  { name: 'Ian', department: 'Commerce', finalGrade: 68, status: 'Fail' },
  { name: 'Julia', department: 'Science', finalGrade: 60, status: 'Fail' }
];
const passStudents = students.filter(student => student.status === 'Pass');
const failStudents = students.filter(student => student.status === 'Fail');

return (
    <div>
        <h1>Student List</h1>

        {/* Display Pass Students */}
        <div>
            <h2>Pass Students</h2>
            <table border="1" style={{ width: '100%', textAlign: 'Center', fontSize: '30px',borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Student Names</th>
                        <th>Department</th>
                        <th>Final Grade</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {passStudents.map((student) => (
                        <View
                          
                            id={num++}
                            name={student.name}
                            depart={student.department}
                            grade={student.finalGrade}
                            stat={student.status}
                        />
                    ))}
                </tbody>
            </table>
        </div>

        {/* Display Fail Students */}
        <div>
            <h2>Fail Students</h2>
            <table border="1" style={{ width: '100%', textAlign: 'Center', fontSize: '30px',borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Student Names</th>
                        <th>Department</th>
                        <th>Final Grade</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {failStudents.map((student) => (
                        <View
                            id={nums++}
                            name={student.name}
                            depart={student.department}
                            grade={student.finalGrade}
                            stat={student.status}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

}