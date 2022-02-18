import { IResolvers } from "@graphql-tools/utils";

// resolvemos los tipos de datos de las uniones
const typesUnionResolvers: IResolvers = {
    dataDB: { //type object DataBD
    __resolveType(obj: { name: string; isbn: string }) {
      // Only Author has a name field
      if (obj.name) {
        return "Client";
      }
      // Only Zapato has a title field
      if (obj.isbn) {
        return "Zapato";
      }
      return null; // GraphQLError is thrown
    },
  },
  
  
};

export default typesUnionResolvers;