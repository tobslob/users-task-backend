import { SchemaFactory } from "../database";
import { trimmedString } from "../util/schema";

export const UserSchema = SchemaFactory({
  name: { ...trimmedString, required: true, index: true },
});
