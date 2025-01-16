"use server";


export const sendMessage = async (prevState,formData) => {

  const { name, email, message } = Object.fromEntries(formData);
 
  try {
    const res = await fetch('https://admin-sciencehub.com/api/messages',{
      method: 'POST',
      body: JSON.stringify(
        { name, email, message } 
      ),
      headers: {
        'content-type': 'application/json'
      }
    })

    console.log(res)

    return { success: true }

  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  } 
};
