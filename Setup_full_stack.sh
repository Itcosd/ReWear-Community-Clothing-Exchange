#!/bin/bash

echo "🚀 Starting Fullstack Project Setup (Django+DRF+React+Tailwind+Motion+GSAP+Redux Toolkit)"

# ----------------------------
# Backend setup
# ----------------------------
echo "📂 Creating backend..."
mkdir backend
cd backend

echo "🛠️ Installing Django & DRF & CORS..."
pip install django djangorestframework django-cors-headers

echo "🎯 Creating Django project and app..."
django-admin startproject backend .
python manage.py startapp accounts

echo "🔧 Configuring settings.py..."
# Add students + rest_framework + corsheaders to INSTALLED_APPS
sed -i "/INSTALLED_APPS = \[/a \    'rest_framework',\n    'corsheaders',\n    'accounts'," backend/settings.py

# Add CORS middleware at top
sed -i "/MIDDLEWARE = \[/a \    'corsheaders.middleware.CorsMiddleware'," backend/settings.py

# Add CORS_ALLOW_ALL_ORIGINS
cat <<EOF >> backend/settings.py

# CORS
CORS_ALLOW_ALL_ORIGINS = True
EOF

# Create Student model
cat <<EOF > accounts/models.py
from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    age = models.IntegerField()

    def __str__(self):
        return self.name
EOF

# Create serializer
cat <<EOF > accounts/serializers.py
from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
EOF

# Create views
cat <<EOF > accounts/views.py
from rest_framework import generics
from .models import Student
from .serializers import StudentSerializer

class StudentListCreateView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
EOF

# Create urls.py
cat <<EOF > accounts/urls.py
from django.urls import path
from .views import StudentListCreateView, StudentRetrieveUpdateDestroyView

urlpatterns = [
    path('students/', StudentListCreateView.as_view(), name='student-list-create'),
    path('students/<int:pk>/', StudentRetrieveUpdateDestroyView.as_view(), name='student-detail'),
]
EOF

# Include students.urls in backend/urls.py
sed -i "s/from django.urls import path/from django.urls import path, include/" backend/urls.py
sed -i "/urlpatterns = \[/a \    path('api/', include('accounts.urls'))," backend/urls.py

echo "📄 Making migrations..."
python manage.py makemigrations
python manage.py migrate

cd ..

# ----------------------------
# Frontend setup
# ----------------------------
echo "📂 Creating frontend..."
mkdir frontend
cd frontend

echo "⚛️ Setting up React + Vite..."
npm create vite@latest . -- --template react

echo "📦 Installing dependencies..."
npm install

echo "🎨 Installing TailwindCSS + Vite plugin..."
npm install tailwindcss @tailwindcss/vite

echo "✨ Installing Motion, GSAP, Redux Toolkit & RTK Query..."
npm install motion gsap @reduxjs/toolkit react-redux

echo "🔧 Configuring TailwindCSS..."
# vite.config.js
cat <<EOF > vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
EOF

# src/index.css
cat <<EOF > src/index.css
@import "tailwindcss";
EOF

echo "📝 Creating example Redux Toolkit Query slice & store..."

# src/app/store.js
mkdir -p src/app
cat <<EOF > src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import { studentsApi } from '../features/studentsApi'

export const store = configureStore({
  reducer: {
    [studentsApi.reducerPath]: studentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentsApi.middleware),
})
EOF

# src/features/studentsApi.js
mkdir -p src/features
cat <<EOF > src/features/studentsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => 'students/',
    }),
  }),
})

export const { useGetStudentsQuery } = studentsApi
EOF

echo "📝 Creating example App.jsx with Motion, GSAP, RTK Query..."

# src/App.jsx
cat <<'EOF' > src/App.jsx
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
EOF

echo "✅ All done!"
echo ""
echo "👉 Next steps:"
echo "1️⃣ Backend:"
echo "   cd backend"
echo "   python manage.py runserver"
echo ""
echo "2️⃣ Frontend:"
echo "   cd frontend"
echo "   npm run dev"
echo ""
