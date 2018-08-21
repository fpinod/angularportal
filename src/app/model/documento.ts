export interface Documento {
  data?: any;
  children: Documento[];
  leaf: boolean;
  expanded: boolean;
}
