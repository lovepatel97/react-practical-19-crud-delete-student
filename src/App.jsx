import React, { useState } from "react";

const INITIAL_STUDENTS = [
  { id: 101, name: "Aarav Sharma", rollNo: "21CS01", course: "B.Tech CS", semester: "6th Sem" },
  { id: 102, name: "Diya Patel", rollNo: "21IT14", course: "B.Tech IT", semester: "6th Sem" },
  { id: 103, name: "Rohan Mehta", rollNo: "21BCA09", course: "BCA", semester: "4th Sem" },
  { id: 104, name: "Ananya Iyer", rollNo: "21CS28", course: "B.Tech CS", semester: "6th Sem" },
  { id: 105, name: "Kabir Khan", rollNo: "21IT45", course: "B.Tech IT", semester: "4th Sem" },
];

function App() {
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [deletedStudent, setDeletedStudent] = useState(null);

  // Delete student by id using filter()
  const handleDelete = (id, name) => {
    const confirmed = window.confirm(`Are you sure you want to delete student "${name}"?`);
    if (!confirmed) return;

    setStudents((prev) => prev.filter((s) => s.id !== id));
    setDeletedStudent(name);
    setTimeout(() => setDeletedStudent(null), 3000);
  };

  const handleReset = () => {
    setStudents(INITIAL_STUDENTS);
    setDeletedStudent(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <header className="bg-white p-6 rounded-2xl shadow-md mb-6 flex flex-wrap justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Practical 19: Student Management (Delete Operation)
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Select any student record and click "Delete" to remove them from the list state.
            </p>
          </div>
          {students.length < INITIAL_STUDENTS.length && (
            <button
              onClick={handleReset}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-900 transition"
            >
              🔄 Reset Student List
            </button>
          )}
        </header>

        {/* Delete Feedback Toast */}
        {deletedStudent && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
            <span>🗑️</span> Student <strong>{deletedStudent}</strong> has been deleted from the database.
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">
              Enrolled Students ({students.length})
            </h2>
            <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2.5 py-1 rounded-full">
              Active Database
            </span>
          </div>

          {students.length === 0 ? (
            <div className="p-12 text-center text-gray-400">
              <p className="text-4xl mb-2">📋</p>
              <p className="text-lg font-semibold text-gray-700 mb-2">All students have been deleted!</p>
              <button
                onClick={handleReset}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
              >
                Restore Default Students
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="px-6 py-4 flex flex-wrap justify-between items-center hover:bg-gray-50 transition gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{student.name}</h3>
                      <p className="text-xs text-gray-500">
                        Roll: <span className="font-medium text-gray-700">{student.rollNo}</span> • Course:{" "}
                        <span className="font-medium text-gray-700">{student.course}</span> ({student.semester})
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(student.id, student.name)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 shadow-sm"
                  >
                    <span>🗑️</span> Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
