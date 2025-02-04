 

export const getPosts = async () => {
  try {
    const res = await fetch("https://admin-sciencehub.com/api/blogs")
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
    const res = await fetch("https://admin-sciencehub.com/api/teachers")
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch teachers!");   
  }
}


export const getTeacherDetails = async (id) => {
  try {
    const res = await fetch(`https://admin-sciencehub.com/api/teachers/${id}`)
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch teacher details!");   
  }
}


export const getCategories = async () => {
  try {
    const res = await fetch("https://admin-sciencehub.com/api/categories")
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch categories!");   
  }
}


export const getCourses = async () => {
  try {
    const res = await fetch("https://admin-sciencehub.com/api/courses")
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch courses!");   
  }
}


export const getCourseDetails = async (id) => {
  try {
    const res = await fetch(`https://admin-sciencehub.com/api/courses/${id}`)
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch course details!");   
  }
};


export const getUserOrders = async (userId) => {
  try {
    const res = await fetch(`https://admin-sciencehub.com/api/orders/${userId}`)
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch course details!");   
  }
};


export const getTestimonials = async () => {
  try {
    const res = await fetch("https://admin-sciencehub.com/api/testimonials")
    return res.json()
  } catch (err) {
    console.log(err);
    throw new Error("Oops, Failed to fetch testimonials!");   
  }
}


