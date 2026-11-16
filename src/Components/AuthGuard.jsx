import { LoaderCircle } from "lucide-react";
import { useGetProfileQuery } from "../api/authApi";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const AuthGuard = ({ children }) => {
  const { data, isSuccess, isLoading } = useGetProfileQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isSuccess) {
      navigate("/auth");
    }
  }, [isSuccess, isLoading]);

  if (isLoading) {
    return <LoaderCircle className="animate-spin" />;
  }

  return children;
};
