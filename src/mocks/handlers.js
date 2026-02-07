import { http, HttpResponse } from "msw";

const API_URL = process.env.REACT_APP_API_URL;

export const handlers = [
  // useProfile
  http.get(`${API_URL}/user/profile/`, () => {
    return HttpResponse.json({
      data: {
        name: "김덕사",
        birth: "20000101",
        gender_display: "여",
        user_regions: [
          {
            region: {
              id: 6,
              district: "도봉구",
            },
          },
          {
            region: {
              id: 24,
              district: "종로구",
            },
          },
        ],
        user_categories: [
          {
            category: {
              id: 1,
              category_name: "교통",
            },
          },
          {
            id: 2,
            category: {
              id: 2,
              category_name: "문화",
            },
          },
          {
            id: 3,
            category: {
              id: 4,
              category_name: "경제",
            },
          },
        ],
      },
    });
  }),
];
