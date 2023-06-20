import { useQueryClient } from "react-query";

export const useGetFetchQuery = (name) => {
    const queryClient = useQueryClient();

    return queryClient.getQueryData(name) || { data: {}};
};