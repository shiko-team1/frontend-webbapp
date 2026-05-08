import { FaqItem } from "../types/FaqItem";

async function fetchFaqList(courseId: number): Promise<FaqItem[]> {
    try {
        const apiUrl = process.env.API_Course_Faq_Url;

        const res = await fetch(`${apiUrl}/course/${courseId}`);
        if (!res.ok) return [];

        const faqList: FaqItem[] = await res.json();
        return faqList;
    } catch {
        return [];
    }
}

export default fetchFaqList;
