import { httpClient } from "@/utils/helpers";

export async function getClassesAPI() {
  try {
    const response = await httpClient.get("/classes");
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.message || error?.message);
  }
}

export async function getClasseByIdAPI(idClasse) {
  try {
    const response = await httpClient.get(`/classes/${idClasse}`);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.message || error?.message);
  }
}

export async function getMatieresByIdClasseAPI(idClasse) {
  try {
    const response = await httpClient.get(`/classes/${idClasse}/matieres`);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.message || error?.message);
  }
}

export async function getMatiereByIdAPI(idClasse, idMatiere) {
  try {
    const response = await httpClient.get(
      `/classes/${idClasse}/matieres/${idMatiere}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.message || error?.message);
  }
}
