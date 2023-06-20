export const SearchResults = {
  __resolveType(obj: any, context: any, info: any) {
    if (obj.name) {
      return "CandidateResponse";
    }

    if (obj.title) {
      return "JobResponse";
    }

    return null;
  },
};
