import {
	LuCirclePlus,
	LuCircleCheckBig,
	LuCircleX,
	LuFileSpreadsheet,
	LuFileText,
	LuDatabase,
	LuPencilLine,
	LuTrash2,
	LuSearch,
	LuLayoutDashboard,
	LuFileImage,
	LuEllipsis,
	LuBook,
	LuUser,
	LuClipboardList,
	LuCircleUserRound,
	LuSettings,
	LuEye,
	LuSave,
	LuLogOut,
	LuCircleChevronDown,
	LuAlignJustify,
	LuArrowLeft,
	LuAtom,
	LuHand,
	LuWrench,
	LuUserRoundPlus,
	LuUserRound,
	LuUsersRound,
	LuInfo,
	LuCircleCheck,
	LuRocket,
	LuCircleSlash,
} from "react-icons/lu"

const Icons = {
	Navbar: {
		Dashboard: LuLayoutDashboard,
		Apps: LuAtom,
		Groups: LuUsersRound,
		Roles: LuWrench,
		Permissions: LuHand,
		Users: LuUserRound,
		Access: LuUserRoundPlus,
	},
	Misc: {
		UserCircle: LuCircleUserRound,
		User: LuUser,
		ClipboardList: LuClipboardList,
		Book: LuBook,
		Settings: LuSettings,
		Rocket: LuRocket,
	},
	Actions: {
		Auth: LuCircleCheck,
		Reject: LuCircleSlash,
		Info: LuInfo,
		ArrowLeft: LuArrowLeft,
		ExpandSelect: LuCircleChevronDown,
		SortHorizontal: LuAlignJustify,
		Save: LuSave,
		Logout: LuLogOut,
		Add: LuCirclePlus,
		Confirm: LuCircleCheckBig,
		Cancel: LuCircleX,
		ExportExcel: LuFileSpreadsheet,
		ExportToPdf: LuFileText,
		NoData: LuDatabase,
		Edit: LuPencilLine,
		Delete: LuTrash2,
		View: LuEye,
		Search: LuSearch,
	},
	MenuType: {
		Horizontal: LuEllipsis,
	},
	FileTypes: {
		Csv: LuFileSpreadsheet,
		Pdf: LuFileText,
		Image: LuFileImage,
	},
}

export default Icons