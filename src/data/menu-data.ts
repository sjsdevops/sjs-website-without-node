import { IMenu, IMenuDT2 } from "@/types/menu-d-t";

const menu_data:IMenu[] = [
    {
        id:1,
        title:'Home',
        link:'/',
     },
	 {
		id:2,
		title:'About Us',
		link:'#',
		dropdown_menus: [
			{id:1, title: "About Us", link: "/about" },
			{id:2, title: "Leadership Messages", link: "/about/leadership" },
			{id:3, title: "Mission, Vision & Policy", link: "/about/mission-vision" },
			{id:4, title: "Why Choose Us", link: "/why-choose-us" },
			{id:5, title: "Mandatory Disclosure", link: "/mandatory-disclosure" },
		],
	 },
	 {
		id:3,
		title:'Academics',
		link:'/academics',
	 },
	 {
		id:4,
		title:'Admissions',
		link:'/online-application',
	 },
	 {
		id:5,
		title:'Facilities',
		link:'/facilities',
	 },
	 {
		id:6,
		title:'Gallery',
		link:'/gallery',
	 },
	 {
		id:7,
		title:'Contact Us',
		link:'/contact',
	 }
];

export default menu_data;

// menu data 2 (keeping it simple for now or matching)
export const menu_data_2:IMenuDT2[] = [];