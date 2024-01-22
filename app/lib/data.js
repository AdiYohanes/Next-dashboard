import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PRE_PAGE = 2;

  try {
    await connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PRE_PAGE)
      .skip(ITEM_PRE_PAGE * (page - 1));
    console.log("Fetched users:", users);

    if (!users.length) {
      console.log("No users found");
    }

    return { users, count };
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchUser = async (id) => {
  try {
    await connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch user!");
  }
};
export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PRE_PAGE = 3;

  try {
    await connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PRE_PAGE)
      .skip(ITEM_PRE_PAGE * (page - 1));
    console.log("Fetched products:", products);

    if (!products.length) {
      console.log("No products found");
    }

    return { products, count };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    await connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch Product!");
  }
};
