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
  
  interface Terms {
    name?: string;
    description?: string;
    ontology_link?: string;
    iri?: string;
  }
  
  export interface info {
    _embedded?: any
  }
  