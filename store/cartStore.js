import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cartCourses: [],

      // ✅ Add Course to Cart
      addCourseToCart: (course) => {
        const { cartCourses } = get();
        const existingCourse = cartCourses.find((c) => c.id === course.id);

        if (!existingCourse) {
          set({
            cartCourses: [...cartCourses, { ...course, quantity: 1 }],
          });
        }
      },

      // ✅ Remove Course from Cart
      removeCourseFromCart: (id) => {
        set((state) => ({
          cartCourses: state.cartCourses.filter((c) => c.id !== id),
        }));
      },

      // ✅ Increase Quantity
      increaseQuantity: (id) => {
        set((state) => ({
          cartCourses: state.cartCourses.map((c) =>
            c.id === id ? { ...c, quantity: c.quantity + 1 } : c
          ),
        }));
      },

      // ✅ Decrease Quantity (Remove if quantity = 1)
      decreaseQuantity: (id) => {
        set((state) => ({
          cartCourses: state.cartCourses
            .map((c) =>
              c.id === id && c.quantity > 1 ? { ...c, quantity: c.quantity - 1 } : c
            )
            .filter((c) => c.quantity > 0),
        }));
      },

      // ✅ Check if Course is in Cart
      isAddedToCartCourses: (id) => {
        return get().cartCourses.some((c) => c.id === id);
      },
    }),
    {
      name: "cart-storage", // 🔥 Local Storage Key
      getStorage: () => localStorage, // Store in Browser Storage
    }
  )
);

export default useCartStore;