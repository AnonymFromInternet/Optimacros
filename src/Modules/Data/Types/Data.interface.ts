import {
  EntityLongIds,
  Labels,
  ParentEntityLongIds,
} from "../../../Shared/Types/GetDataResponseInterface";

export interface DataInterface {
  entityLongIds: EntityLongIds;
  labels: Labels;
  parentEntityLongIds: ParentEntityLongIds;
}
