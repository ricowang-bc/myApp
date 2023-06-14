export type AccessToken = {
  token?: string;
  expiration?: string;
};

export type BaseViewModel = {
  id?: string;
  isDeleted?: boolean;
  createdTime?: string;
};

export type CancelParams = {
  id: string;
};

export type Car = GuidEntity & {} & {
  number?: string;
  color?: string;
  brand?: string;
  type?: string;
  initMileage?: number;
  currentMileage?: number;
  engineNo?: string;
  useState?: CarState;
};

export enum CarState {
  Can = 'Can',
  Applied = 'Applied',
  Using = 'Using',
}

export type CarViewModel = BaseViewModel & {} & {
  number?: string;
  color?: string;
  brand?: string;
  type?: string;
  initMileage?: number;
  currentMileage?: number;
  engineNo?: string;
  useState?: CarState;
};

export type ChangeUseStateParams = {
  id: string;
  state: CarState;
};

export type Che = WorkFlow & {} & {
  begin?: string;
  finish?: string;
  beginMileage?: number;
  finishMileage?: number;
  carID?: string;
  remark?: string;
  car?: Car;
};

export type CheViewModel = WorkViewModel & {} & {
  begin?: string;
  finish?: string;
  beginMileage?: number;
  finishMileage?: number;
  carID?: string;
  remark?: string;
  carNumber?: string;
  carType?: string;
  carBrand?: string;
  canReturn?: boolean;
};

export type CreateCheViewModel = {
  begin?: string;
  finish?: string;
  beginMileage?: number;
  carID?: string;
  remark?: string;
};

export type CreateDocViewModel = {
  weHao?: string;
  title?: string;
  unit?: string;
  source?: Source;
  priority?: Priority;
  files?: string;
  remark?: string;
  state?: State;
  checkers?: string[];
};

export type CreateLeaveViewModel = {
  type?: LeaveType;
  days?: string;
  dayCount?: number;
  reason?: string;
};

export type CreateReadViewModel = {
  meetID?: string;
};

export type CreateReportViewModel = {
  content?: string;
};

export type CreateReturnViewModel = {
  files?: string;
  oilState?: OilState;
  recoredOil?: number;
  recoredMileage?: number;
  flowID?: string;
};

export type CreateTripViewModel = {
  type?: TripType;
  start?: string;
  end?: string;
  dayCount?: number;
  to?: string;
  toCode?: string;
  pass?: string;
  passCode?: string;
  traffic?: TrafficType;
  reason?: string;
  entourage?: string;
};

export type CreateWorkSealViewModel = {
  sealID?: string;
  reason?: string;
  bookName?: string;
  bookISBN?: string;
  bookCount?: number;
  gongWenName?: string;
  qianZhiName?: string;
  qianZhiISBN?: string;
  qianZhiCount?: number;
  fengTiaoCount?: number;
  type?: SealFlowType;
};

export type CreatMeetingViewModel = {
  title?: string;
  room?: string;
  remark?: string;
  files?: string;
  meetTime?: string;
  members?: string;
};

export type Department = GuidEntity & {} & {
  name?: string;
  description?: string;
  index?: number;
  parentID?: string;
  managerID?: string;
  majorID?: string;
  parent?: Department;
  departments?: Department[];
};

export type DepartmentViewModel = BaseViewModel & {} & {
  name?: string;
  description?: string;
  index?: number;
  parentID?: string;
  managerID?: string;
  majorID?: string;
  majorName?: string;
  managerName?: string;
  fullPath?: string[];
  children?: DepartmentViewModel[];
};

export type Doc = WorkFlow & {} & {
  weHao?: string;
  title?: string;
  unit?: string;
  source?: Source;
  priority?: Priority;
  files?: string;
  remark?: string;
  number?: number;
  state?: State;
  step?: number;
};

export type DocQueryRequest = QueryRequest & {} & {
  title?: string;
  source?: Source;
};

export type DocViewModel = WorkViewModel & {} & {
  weHao?: string;
  number?: number;
  title?: string;
  unit?: string;
  source?: Source;
  priority?: Priority;
  files?: string;
  remark?: string;
  state?: State;
  step?: number;
};

export type DoParams = {
  flowID: string;
};

export type DownloadParams = {
  id: string;
};

export type EditParams = {
  id: string;
};


export type Entity = {
  createdTime?: string;
  isDeleted?: boolean;
};

export type EntityOfGuid = Entity & {} & {
  id?: string;
};

export enum FlowStatus {
  Await = 'Await',
  Proccess = 'Proccess',
  Finish = 'Finish',
  Rejected = 'Rejected',
  Cancelled = 'Cancelled',
}

export type FlowStep = {
  flowID?: string;
  step?: number;
  userID?: string;
  nodeID?: string;
  event?: StepEvent;
  content?: string;
  roleName?: string;
  userName?: string;
  publishTime?: string;
};

export enum Gender {
  Unknown = 'Unknown',
  Male = 'Male',
  FeMale = 'FeMale',
}

export type GuidEntity = EntityOfGuid & {} & {
  id?: string;
};

export type IHeaderDictionary = {
  Item?: any[];
  ContentLength?: number;
  Accept?: any[];
  AcceptCharset?: any[];
  AcceptEncoding?: any[];
  AcceptLanguage?: any[];
  AcceptRanges?: any[];
  AccessControlAllowCredentials?: any[];
  AccessControlAllowHeaders?: any[];
  AccessControlAllowMethods?: any[];
  AccessControlAllowOrigin?: any[];
  AccessControlExposeHeaders?: any[];
  AccessControlMaxAge?: any[];
  AccessControlRequestHeaders?: any[];
  AccessControlRequestMethod?: any[];
  Age?: any[];
  Allow?: any[];
  AltSvc?: any[];
  Authorization?: any[];
  Baggage?: any[];
  CacheControl?: any[];
  Connection?: any[];
  ContentDisposition?: any[];
  ContentEncoding?: any[];
  ContentLanguage?: any[];
  ContentLocation?: any[];
  ContentMD5?: any[];
  ContentRange?: any[];
  ContentSecurityPolicy?: any[];
  ContentSecurityPolicyReportOnly?: any[];
  ContentType?: any[];
  CorrelationContext?: any[];
  Cookie?: any[];
  Date?: any[];
  ETag?: any[];
  Expires?: any[];
  Expect?: any[];
  From?: any[];
  GrpcAcceptEncoding?: any[];
  GrpcEncoding?: any[];
  GrpcMessage?: any[];
  GrpcStatus?: any[];
  GrpcTimeout?: any[];
  Host?: any[];
  KeepAlive?: any[];
  IfMatch?: any[];
  IfModifiedSince?: any[];
  IfNoneMatch?: any[];
  IfRange?: any[];
  IfUnmodifiedSince?: any[];
  LastModified?: any[];
  Link?: any[];
  Location?: any[];
  MaxForwards?: any[];
  Origin?: any[];
  Pragma?: any[];
  ProxyAuthenticate?: any[];
  ProxyAuthorization?: any[];
  ProxyConnection?: any[];
  Range?: any[];
  Referer?: any[];
  RetryAfter?: any[];
  RequestId?: any[];
  SecWebSocketAccept?: any[];
  SecWebSocketKey?: any[];
  SecWebSocketProtocol?: any[];
  SecWebSocketVersion?: any[];
  SecWebSocketExtensions?: any[];
  Server?: any[];
  SetCookie?: any[];
  StrictTransportSecurity?: any[];
  TE?: any[];
  Trailer?: any[];
  TransferEncoding?: any[];
  Translate?: any[];
  TraceParent?: any[];
  TraceState?: any[];
  Upgrade?: any[];
  UpgradeInsecureRequests?: any[];
  UserAgent?: any[];
  Vary?: any[];
  Via?: any[];
  Warning?: any[];
  WebSocketSubProtocols?: any[];
  WWWAuthenticate?: any[];
  XContentTypeOptions?: any[];
  XFrameOptions?: any[];
  XPoweredBy?: any[];
  XRequestedWith?: any[];
  XUACompatible?: any[];
  XXSSProtection?: any[];
};

export type Leave = WorkFlow & {} & {
  type?: LeaveType;
  days?: string;
  dayCount?: number;
  reason?: string;
};

export enum LeaveType {
  事假 = '事假',
  病假 = '病假',
  婚假 = '婚假',
  产假 = '产假',
  丧假 = '丧假',
  探亲假 = '探亲假',
  年休假 = '年休假',
  其他 = '其他',
}

export type LeaveViewModel = WorkViewModel & {} & {
  type?: LeaveType;
  days?: string;
  dayCount?: number;
  reason?: string;
};

export type LoginRequest = {
  userName?: string;
  password?: string;
};

export type LoginResponseOfAuthController = {
  info?: UserViewModel;
  token?: AccessToken;
};

export type Meeting = WorkFlow & {} & {
  title?: string;
  room?: string;
  remark?: string;
  files?: string;
  meetTime?: string;
  achived?: boolean;
  download?: boolean;
};

export type MeetingViewModel = WorkViewModel & {} & {
  title?: string;
  room?: string;
  remark?: string;
  files?: string;
  meetTime?: string;
  members?: string;
  achived?: boolean;
  download?: boolean;
  memberNames?: string[];
};

export type Menu = GuidEntity & {} & {
  name?: string;
  title?: string;
  code?: string;
  icon?: string;
  path?: string;
  description?: string;
  content?: string;
  closeable?: boolean;
  fullPath?: string;
  parentID?: string;
  type?: MenuType;
  sortIndex?: number;
  parent?: Menu;
  children?: Menu[];
};

export enum MenuType {
  Header = 'Header',
  Menu = 'Menu',
  Button = 'Button',
}

export type MenuViewModel = BaseViewModel & {} & {
  name?: string;
  title?: string;
  code?: string;
  icon?: string;
  path?: string;
  closeable?: boolean;
  parentID?: string;
  type?: MenuType;
  sortIndex?: number;
  fullPath?: string;
  children?: MenuViewModel[];
};

export type Node = GuidEntity & {} & {
  flowID?: string;
  step?: number;
  userID?: string;
  user?: User;
  type?: NodeType;
  isPublished?: boolean;
  publishTime?: string;
  isAutoPublish?: boolean;
};

export enum NodeType {
  审批 = '审批',
  签字 = '签字',
  办理 = '办理',
  归档 = '归档',
  打印 = '打印',
  完成 = '完成',
}

export enum OilState {
  满 = '满',
  部分 = '部分',
  空 = '空',
}

export type PageResponseOfCarViewModel = {
  total?: number;
  count?: number;
  data?: CarViewModel[];
};

export type PageResponseOfCheViewModel = {
  total?: number;
  count?: number;
  data?: CheViewModel[];
};

export type PageResponseOfDocViewModel = {
  total?: number;
  count?: number;
  data?: DocViewModel[];
};

export type PageResponseOfLeaveViewModel = {
  total?: number;
  count?: number;
  data?: LeaveViewModel[];
};

export type PageResponseOfMeetingViewModel = {
  total?: number;
  count?: number;
  data?: MeetingViewModel[];
};

export type PageResponseOfReadViewModel = {
  total?: number;
  count?: number;
  data?: ReadViewModel[];
};

export type PageResponseOfReportViewModel = {
  total?: number;
  count?: number;
  data?: ReportViewModel[];
};

export type PageResponseOfReturnViewModel = {
  total?: number;
  count?: number;
  data?: ReturnViewModel[];
};

export type PageResponseOfRoleViewModel = {
  total?: number;
  count?: number;
  data?: RoleViewModel[];
};

export type PageResponseOfSeal = {
  total?: number;
  count?: number;
  data?: Seal[];
};

export type PageResponseOfTripViewModel = {
  total?: number;
  count?: number;
  data?: TripViewModel[];
};

export type PageResponseOfUserViewModel = {
  total?: number;
  count?: number;
  data?: UserViewModel[];
};

export type PageResponseOfWorkSealViewModel = {
  total?: number;
  count?: number;
  data?: WorkSealViewModel[];
};

export enum Priority {
  一般程序 = '一般程序',
  紧急知会 = '紧急知会',
}

export type Publish2Params = {
  flowID: string;
};

export type PublishParams = {
  flowID: string;
};


export type PutParams = {
  id: string;
};

export enum QueryMode {
  AWait = 'AWait',
  Done = 'Done',
  CreateByMe = 'CreateByMe',
  All = 'All',
}

export type QueryParams = {
  page?: number;
  limit?: number;
};


export type QueryRequest = {
  name?: string;
  mode?: QueryMode;
};

export type Read = WorkFlow & {} & {
  meetID?: string;
};

export type ReadViewModel = WorkViewModel & {} & {
  meetID?: string;
  meetingTitle?: string;
};

export type RejectParams = {
  flowID: string;
};


export type RemoveParams = {
  id: string;
};


export type Report = WorkFlow & {} & {
  content?: string;
};

export type ReportQueryRequest = QueryRequest & {} & {
  content?: string;
};

export type ReportViewModel = WorkViewModel & {} & {
  content?: string;
};

export type Return = WorkFlow & {} & {
  files?: string;
  oilState?: OilState;
  recoredOil?: number;
  recoredMileage?: number;
  flowID?: string;
  carID?: string;
  car?: Car;
};

export type ReturnViewModel = WorkViewModel & {} & {
  files?: string;
  begin?: string;
  finish?: string;
  beginMileage?: number;
  oilState?: OilState;
  recoredOil?: number;
  recoredMileage?: number;
  flowID?: string;
  carID?: string;
  carNumber?: string;
  carType?: string;
  carBrand?: string;
};

export type Role = GuidEntity & {} & {
  name?: string;
  code?: string;
  isFixed?: boolean;
  isAdmin?: boolean;
  leaderID?: string;
  leader?: Role;
  level?: number;
};

export type RoleViewModel = BaseViewModel & {} & {
  name?: string;
  code?: string;
  isFixed?: boolean;
  isAdmin?: boolean;
  leaderID?: string;
  level?: number;
};

export type Seal = GuidEntity & {} & {
  label?: string;
};

export enum SealFlowType {
  Normal = 'Normal',
  NormalUnderFile = 'NormalUnderFile',
  NormalOverFile = 'NormalOverFile',
  Easy = 'Easy',
  CYFT = 'CYFT',
  GWGZ = 'GWGZ',
  QZWS = 'QZWS',
}

export type SealViewModel = BaseViewModel & {} & {
  label?: string;
};

export enum Source {
  省 = '省',
  市政府 = '市政府',
  市局 = '市局',
}

export enum State {
  待签 = '待签',
  待办 = '待办',
  完成 = '完成',
}

export enum StepEvent {
  Create = 'Create',
  Pass = 'Pass',
  Reject = 'Reject',
  Cancel = 'Cancel',
  Sign = 'Sign',
  Do = 'Do',
  Finish = 'Finish',
}

export enum TrafficType {
  长途汽车 = '长途汽车',
  公务用车 = '公务用车',
  火车 = '火车',
  飞机 = '飞机',
  其他 = '其他',
}

export type Trip = WorkFlow & {} & {
  type?: TripType;
  start?: string;
  end?: string;
  dayCount?: number;
  to?: string;
  toCode?: string;
  pass?: string;
  passCode?: string;
  traffic?: TrafficType;
  reason?: string;
  entourage?: string;
};

export enum TripType {
  本市 = '本市',
  外地 = '外地',
}

export type TripViewModel = WorkViewModel & {} & {
  type?: TripType;
  start?: string;
  end?: string;
  dayCount?: number;
  to?: string;
  toCode?: string;
  pass?: string;
  passCode?: string;
  traffic?: TrafficType;
  reason?: string;
  entourage?: string;
};

export type UpdateCheViewModel = {
  id?: string;
  begin?: string;
  finish?: string;
  beginMileage?: number;
  carID?: string;
  remark?: string;
};

export type UpdateDocViewModel = {
  id?: string;
  weHao?: string;
  title?: string;
  unit?: string;
  source?: Source;
  priority?: Priority;
  files?: string;
  remark?: string;
  state?: State;
  checkers?: string;
};

export type UpdateLeaveViewModel = {
  id?: string;
  type?: LeaveType;
  days?: string;
  dayCount?: number;
  reason?: string;
};

export type UpdateMeetingViewModel = {
  id?: string;
  title?: string;
  room?: string;
  remark?: string;
  files?: string;
  meetTime?: string;
  members?: string;
};

export type UpdateReadViewModel = {
  id?: string;
  meetID?: string;
};

export type UpdateReportViewModel = {
  id?: string;
  content?: string;
};

export type UpdateTripViewModel = {
  id?: string;
  type?: TripType;
  start?: string;
  end?: string;
  dayCount?: number;
  to?: string;
  toCode?: string;
  pass?: string;
  passCode?: string;
  traffic?: TrafficType;
  reason?: string;
  entourage?: string;
};

export type UpdateWorkSealViewModel = {
  id?: string;
  sealID?: string;
  reason?: string;
  bookName?: string;
  bookISBN?: string;
  bookCount?: number;
  gongWenName?: string;
  qianZhiName?: string;
  qianZhiISBN?: string;
  qianZhiCount?: number;
  fengTiaoCount?: number;
  type?: SealFlowType;
};

export type User = GuidEntity & {} & {
  userName?: string;
  password?: string;
  name?: string;
  gender?: Gender;
  avatar?: string;
  phone?: string;
  email?: string;
  introduction?: string;
  signImg?: string;
  roleID?: string;
  role?: Role;
  departmentID?: string;
  department?: Department;
};

export type UserQueryRequest = QueryRequest & {} & {
  phone?: string;
  departmentID?: string;
};

export type UserViewModel = BaseViewModel & {} & {
  name?: string;
  userName?: string;
  password?: string;
  email?: string;
  phone?: string;
  departmentID?: string;
  roleID?: string;
  avatar?: string;
  gender?: Gender;
  introduction?: string;
  signImg?: string;
  role?: RoleViewModel;
  department?: DepartmentViewModel;
};

export type WorkApprovalAndDisptcherRequest = {
  id?: string;
  remark?: string;
  donners?: string[];
};

export type WorkApprovalRequest = {
  id?: string;
  remark?: string;
};

export type WorkFlow = GuidEntity & {} & {
  prefix?: string;
  uuid?: string;
  status?: FlowStatus;
  completeTime?: string;
  creatorID?: string;
  creator?: User;
  nodeID?: string;
  node?: Node;
  nodeUserID?: string;
  rejectionCount?: number;
};

export type WorkSeal = WorkFlow & {} & {
  sealID?: string;
  seal?: Seal;
  reason?: string;
  bookName?: string;
  bookISBN?: string;
  bookCount?: number;
  gongWenName?: string;
  qianZhiName?: string;
  qianZhiISBN?: string;
  qianZhiCount?: number;
  fengTiaoCount?: number;
  type?: SealFlowType;
  isEasy?: boolean;
  step?: number;
};

export type WorkSealViewModel = WorkViewModel & {} & {
  sealID?: string;
  sealLabel?: string;
  reason?: string;
  bookName?: string;
  bookISBN?: string;
  bookCount?: number;
  gongWenName?: string;
  qianZhiName?: string;
  qianZhiISBN?: string;
  qianZhiCount?: number;
  fengTiaoCount?: number;
  step?: number;
  type?: SealFlowType;
};

export type WorkViewModel = BaseViewModel & {} & {
  prefix?: string;
  uuid?: string;
  status?: FlowStatus;
  completeTime?: string;
  creatorID?: string;
  creatorName?: string;
  creatorDepartmentName?: string;
  creatorRoleName?: string;
  nodeID?: string;
  nodeUserID?: string;
  nodeUserName?: string;
  nodeType?: NodeType;
  steps?: FlowStep[];
  canPublish?: boolean;
  rejectionCount?: number;
};
