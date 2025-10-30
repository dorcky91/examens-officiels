// Colección de imágenes de estudiantes de Unsplash
export const studentImages = {
  // Estudiantes colaborando
  collaboration: {
    group1: "/eleves/1.jpg",
    group2: "/eleves/2.jpg",
    group3: "/eleves/3.jpg",
  },

  // Estudiantes estudiando individualmente
  studying: {
    focused1: "/eleves/3.jpg",
    reading: "/eleves/5.jpg",
    writing: "/eleves/6.jpg",
    laptop: "/eleves/7.jpg",
  },

  // En aulas y bibliotecas
  classroom: {
    library1:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1132&q=80",
    library2:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    classroom1:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1132&q=80",
    presentation:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },

  // Estudiantes con tecnología
  technology: {
    tablet: "/eleves/2.jpg",
    computer: "/eleves/5.jpg",
    online: "/eleves/4.jpg",
  },

  // Estudiantes con libros y materiales
  materials: {
    books1: "/eleves/6.jpg",
    books2: "/eleves/2.jpg",
    notebooks: "/eleves/3.jpg",
    supplies: "/eleves/4.jpg",
  },

  // Estudiantes celebrando/graduación
  success: {
    graduation1:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    graduation2:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1098&q=80",
    celebrating:
      "https://images.unsplash.com/photo-1580581442104-8136c75d6a15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },

  // Diversidad de estudiantes
  diversity: {
    diverse1: "/eleves/7.jpg",
    diverse2: "/eleves/8.jpg",
    international: "/eleves/9.jpg",
  },
};

// Función helper para obtener una imagen aleatoria de una categoría
export const getRandomStudentImage = (category) => {
  const categoryImages = studentImages[category];
  if (!categoryImages) return null;

  const imageKeys = Object.keys(categoryImages);
  const randomKey = imageKeys[Math.floor(Math.random() * imageKeys.length)];
  return categoryImages[randomKey];
};

// Función para obtener todas las imágenes de estudiantes en un array
export const getAllStudentImages = () => {
  const allImages = [];
  Object.values(studentImages).forEach((category) => {
    Object.values(category).forEach((imageUrl) => {
      allImages.push(imageUrl);
    });
  });
  return allImages;
};

// Función para obtener imágenes específicas para el carousel del header
export const getHeaderCarouselImages = () => [
  studentImages.collaboration.group1,
  studentImages.materials.books1,
  studentImages.studying.focused1,
  studentImages.classroom.library1,
  studentImages.technology.tablet,
];

export default studentImages;
