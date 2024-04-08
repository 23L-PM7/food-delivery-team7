import { CategoryModel } from "../models/category.models";

export async function getCategory(req: any, res: any) {
  const categories = await CategoryModel.find();
  res.json(categories);
}

export async function createCategory(req: any, res: any) {
  const { name } = req.body;
  console.log(name);

  const categories = await CategoryModel.create({
    name: name,
  });
  res.json(categories);
}

export async function updateCategory(req: any, res: any) {
  const { _id } = req.params;
  const categories = await CategoryModel.updateOne({ _id });
  res.json(categories);
}

export async function deleteCategory(req: any, res: any) {
  const { _id } = req.params;

  await CategoryModel.deleteOne({ _id });
  res.sendStatus(204);
}
