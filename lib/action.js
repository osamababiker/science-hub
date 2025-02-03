"use server";

import { messagesUrl, ordersUrl } from "./constants";


export const sendMessage = async (prevState,formData) => {
  const { name, email, message } = Object.fromEntries(formData);
  try {
    const res = await fetch(messagesUrl,{
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


export const sendOrder = async (formData) => {
  try {
      const response = await fetch(ordersUrl,{
          method: 'POST',
          body: JSON.stringify({
            user_id: formData.user_id,
            course_id: formData.course_id,
            country: formData.country,
            city: formData.city,
            payment_method: formData.payment_method,
            notes: formData.notes,
            status: formData.status,
          }),
          headers: { 'content-type': 'application/json'}
      });
      return await response.json();
  } catch (err) {
      return null; 
  }
}

