export interface AttendanceParams {
  userId: string;
  attendanceDate: string;
  attendance: string;
  contextId: string;
}

export interface CohortCardProps {
  showBackground: boolean;
  isRemote: boolean;
  cohortName: string;
  cohortId: string;
}

export interface MarkAttendanceProps {
  isOpen: boolean;
  isSelfAttendance?: boolean;
  date: string;
  name?: string;
  currentStatus: string;
  handleClose: () => void;

  handleSubmit: (attendanceDate: string, attendance: string) => void;
  message?: string;
}

export interface AttendanceStatusListViewProps {
  userData?: UserAttendanceObj;
  isEdit?: boolean;
  isBulkAction?: boolean;
  handleBulkAction?: (
    isBulkAction: boolean,
    status: string,
    id?: string | undefined
  ) => void;
  bulkAttendanceStatus?: string;
}

export interface UserAttendanceObj {
  userId: string;
  attendance: string; //Mandatory
  name?: string;
  attendanceDate?: Date | string;
}

export interface BulkAttendanceParams {
  attendanceDate: string;
  contextId: string;
  userAttendance: UserAttendanceObj[];
}

export interface cohortListParam {
  limit: number;
  page: number;
  filters: {
    userId: string;
  };
}

export interface cohortMemberList {
  limit: string;
  page: number;
  filters: {
    cohortId: string;
  };
}

export interface AttendanceByDateParams {
  fromDate: string;
  toDate: string;
  page: number;
  filters: {
    userId?: string;
    contextId?: string;
  };
}

export interface TeacherAttendanceByDateParams {
  fromDate: string;
  toDate: string;
  filters: {
    userId: string;
    contextId: string;
  };
}

interface CustomField {
  label: string;
  value: string;
}
export interface UserData {
  id: number;
  name: string;
  role: string;
  district: string;
  state: string;
  email: string;
  dob?: string;
  mobile?: string;
  customFields: CustomField[];
}

interface CustomField {
  label: string;
  value: string;
}
export interface UserData {
  id: number;
  name: string;
  role: string;
  district: string;
  state: string;
  email: string;
  dob?: string;
  mobile?: string;
  customFields: CustomField[];
}

export interface AttendanceReports {
  contextId: string;
  userId: string;
  report: boolean;
  limit: number;
  filters: object;
}

export interface TimeTableCardProps {
  subject: string;
  instructor: string;
  time: string;
}
export interface ExtraSessionsCardProps {
  subject: string;
  instructor: string;
  dateAndTime: string;
  meetingURL: string;
  onEditClick?: () => void;
  onCopyClick?: () => void;}
export interface AttendanceStatusListProps {
  limit: number;
  page: number;
  filters: {
    contextId: string;
    scope: string;
  };
}
