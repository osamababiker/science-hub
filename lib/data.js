 

export const getPosts = async () => {
  try {
    const res = await fetch("https://admin-sciencehub.com/api/blogs", {
      next: { revalidate: 3600 }
    })
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch posts!");
  }
};

export const getPostDetails = async (slug) => {
  try {
    const res = await fetch(`https://admin-sciencehub.com/api/blogs/${slug}`)
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch post!");
  }
};

 
export const getPartners = async () => {
  try {
    const res = await fetch("https://admin-sciencehub.com/api/partners", {
      next: { revalidate: 3600 },
    })
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch partners!");   
  }
}

export const getTeachers = async () => {
  try {
    const res = await fetch("https://admin-sciencehub.com/api/teachers", {
      next: { revalidate: 3600 },
    })
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch teachers!");   
  }
}


export const getTeacherDetails = async (id) => {
  try {
    const res = await fetch(`https://admin-sciencehub.com/api/teachers/${id}`, {
      next: { revalidate: 3600 },
    })
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch teacher details!");   
  }
}


export const getCategories = async () => {
  try {
    const res = await fetch("https://admin-sciencehub.com/api/categories", {
      next: { revalidate: 3600 },
    })
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch categories!");   
  }
}


export const getCourses = async () => {
  try {
    const res = await fetch("https://admin-sciencehub.com/api/courses", {
      next: { revalidate: 3600 },
    })
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch courses!");   
  }
}


export const getCourseDetails = async (id) => {
  try {
    const res = await fetch(`https://admin-sciencehub.com/api/courses/${id}`, {
      next: { revalidate: 3600 },
    })
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch course details!");   
  }
};


export const getTestimonials = async () => {
  try {
    const res = await fetch("https://admin-sciencehub.com/api/testimonials", {
      next: { revalidate: 3600 },
    })
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch testimonials!");   
  }
}