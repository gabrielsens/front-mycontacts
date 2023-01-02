class CategoryMapper {
  toDomain(categoryPersistence) {
    return {
      id: categoryPersistence.id,
      name: categoryPersistence.name,
    };
  }

  toPersistence(categoryDomain) {
    return {
      id: categoryDomain.id,
      name: categoryDomain.name,
    };
  }
}

export default new CategoryMapper();
