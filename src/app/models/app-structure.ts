enum BM_TYPE { G = 'gene',
  P = 'protein'
}

export interface Structure {
    name?: string;
    id?: string; 
    rdfs_label?: string; 
    b_type?: BM_TYPE;
  }
  
export interface Row {
    anatomical_structures: Array<Structure>; 
    cell_types: Array<Structure>; 
    biomarkers: Array<Structure>;
  }
  
  export interface data {
    csv?: '';
    data?: Array<Row>;
  }
  
  export interface info {
    _embedded?: any
  }

  export interface Terms {
    label?: string;
    description?: string[];
    annotation?: Annotation;
    obo_id?: string;
    iri?: string;
  }

  export interface Annotation {
    definition?: string[];
  }
  