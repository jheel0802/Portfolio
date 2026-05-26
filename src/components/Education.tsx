
import React from 'react';
import { Award, GraduationCap } from 'lucide-react';

const masterCourses = [
  "Operating Systems Principles", "Automated Learning and Data Analysis", "Computer & Network Security", 
  "Software Security", "Neural Networks", "Database Management Systems", 
  "Design and Analysis of Algorithms", "Internet Protocols", "Generative AI for Computer Systems", "Deep Learning Beyond Accuracy"
];

const bachelorCourses = [
  "Data Structures & Algorithms", "Database Management Systems", "Operating Systems", 
  "Machine Learning", "Artificial Intelligence", "Data Mining & Statistical Analysis", 
  "Computer Networks", "Software Engineering"
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Award className="text-indigo-600 w-8 h-8" />
          <h2 className="text-4xl font-bold text-gray-800">Education</h2>
        </div>
        <div className="space-y-12">
          {/* Master's Degree */}
          <div className="p-8 rounded-2xl bg-white shadow-lg border border-gray-200/80">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Master of Computer Science</h3>
                <p className="text-indigo-600 font-semibold text-lg">North Carolina State University</p>
              </div>
              <div className="text-sm text-gray-500 mt-2 sm:mt-0 sm:text-right">
                <span className="flex items-center gap-2 justify-start sm:justify-end">
                  <GraduationCap className="w-4 h-4" /> May 2026
                </span>
                <span className="font-bold text-gray-700">GPA: 3.8 / 4.0</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-bold text-gray-700 mb-3">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {masterCourses.map(course => (
                  <span key={course} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="p-8 rounded-2xl bg-white shadow-lg border border-gray-200/80">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Bachelor of Technology (B.Tech), Computer Engineering</h3>
                <p className="text-md text-gray-600 font-medium">Honors in Data Science</p>
                <p className="text-indigo-600 font-semibold text-lg mt-1">Somaiya Vidyavihar University</p>
              </div>
              <div className="text-sm text-gray-500 mt-2 sm:mt-0 sm:text-right">
                <span className="flex items-center gap-2 justify-start sm:justify-end">
                  <GraduationCap className="w-4 h-4" /> Graduated: June 2024
                </span>
                <span className="font-bold text-gray-700">GPA: 9.0 / 10.0</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-bold text-gray-700 mb-3">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {bachelorCourses.map(course => (
                  <span key={course} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
