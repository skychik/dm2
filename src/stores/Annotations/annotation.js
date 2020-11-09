import { types } from "mobx-state-tree";
import { CustomJSON, StringOrNumber } from "../types";

export const Annotation = types.model("Annotation", {
  id: types.identifierNumber,
  result: types.optional(types.array(CustomJSON), []),
  task_id: types.integer,
  created_at: types.optional(types.maybeNull(StringOrNumber), null),
  updated_at: types.optional(types.maybeNull(StringOrNumber), null),
  source: types.optional(types.string, ""),
});
