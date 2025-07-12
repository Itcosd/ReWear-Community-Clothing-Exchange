import React, { useEffect, useRef } from "react"
import { motion } from "motion/react"
import gsap from "gsap"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { useGetStudentsQuery } from "./features/studentsApi"

const Students = () => {
  const { data = [], error, isLoading } = useGetStudentsQuery()
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error fetching students</p>

  return (
    <ul>
      {data.map((student) => (
        <li key={student.id}>{student.name} - {student.email}</li>
      ))}
    </ul>
  )
}

const App = () => {
  const gsapRef = useRef(null)

  useEffect(() => {
    gsap.from(gsapRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
  }, [])

  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-100">
        <motion.div
          className="w-40 h-40 bg-indigo-600 text-white rounded-lg flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2 }}
        >
          Motion
        </motion.div>

        <div
          ref={gsapRef}
          className="w-40 h-40 bg-green-500 text-white rounded-lg flex items-center justify-center"
        >
          GSAP
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Students:</h2>
          <Students />
        </div>
      </div>
    </Provider>
  )
}

export default App
