export interface GetDataResponseInterface {
  entityLabelPages: [
    {
      entityLongIds: EntityLongIds;
      labels: Labels;
      parentEntityLongIds: ParentEntityLongIds;
    }
  ];
}

export type EntityLongIds = number[];
export type Labels = string[];
export type ParentEntityLongIds = number[];
