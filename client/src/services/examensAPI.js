import { httpClient } from "@/utils/helpers";

export async function getExamensByMatiere(idClasse, nom) {
  try {
    const response = await httpClient.get(
      `/examens/classe/${idClasse}/matiere/${nom}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.message || error?.message);
  }
}

export async function getExamensByMatiereAndDate(idClasse, nom, date) {
  try {
    const response = await httpClient.get(
      `/examens/classe/${idClasse}/matiere/${nom}/date/${date}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.message || error?.message);
  }
}
