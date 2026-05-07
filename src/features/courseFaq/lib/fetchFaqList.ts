import { FaqItem } from "../types/FaqItem";

async function fetchFaqList(courseId: string): Promise<FaqItem[]> {
    try {
        const apiUrl = "http://localhost:8080/api/faq/course/";

        const res = await fetch(apiUrl + courseId);
        if (!res.ok) return [];

        const faqList: FaqItem[] = await res.json();
        return faqList;
    } catch {
        return [];
    }
}

export default fetchFaqList;
