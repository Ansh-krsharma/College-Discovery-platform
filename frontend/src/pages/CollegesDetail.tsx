import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Calendar, MapPin, Star, Wallet } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Overview from "../components/college/Overview";
import Courses from "../components/college/Courses";
import Placements from "../components/college/Placements";
import Reviews from "../components/college/Reviews";
import api from "../services/api";
import CollegeDetailSkeleton from "../components/college/CollegeDetailSkeleton";
import type { College } from "../types/college";
import { formatCurrency } from "../utils/formatCurrency";
import CompareButton from "../components/compare/CompareButton";
import SaveButton from "../components/saved/SaveButton";

export default function CollegeDetail() {
  const { id } = useParams();

  const { data, isLoading } = useQuery<College>({
    queryKey: ["college", id],
    queryFn: async () => {
      const res = await api.get(`/colleges/${id}`);
      return res.data;
    },
  });

  if (isLoading || !data) {
    return (
      <>
        <Navbar />
        <CollegeDetailSkeleton />
      </>
    );
  }

  const metrics = [
    {
      label: "Rating",
      value: data.rating,
      Icon: Star,
    },
    {
      label: "Annual fees",
      value: formatCurrency(data.fees),
      Icon: Wallet,
    },
    {
      label: "Established",
      value: data.established || "Updated soon",
      Icon: Calendar,
    },
    {
      label: "Courses",
      value: `${data.courses?.length || 0} programs`,
      Icon: Calendar,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 py-10">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <img
            src={
              data.imageUrl ||
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
            }
            alt={data.name}
            className="h-72 w-full object-cover md:h-96"
          />

          <div className="p-6 md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">
              {data.type || "College"}
            </p>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
              <div>
                <h1 className="font-display text-4xl leading-tight text-slate-950 dark:text-white md:text-6xl">
                  {data.name}
                </h1>
                <p className="mt-3 flex items-center gap-2 text-muted">
                  <MapPin size={17} />
                  {data.location || "India"}
                </p>
              </div>
              <div className="flex min-w-72 gap-2">
                <CompareButton college={data} />
                <SaveButton collegeId={data.id} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {metrics.map(({ label, value, Icon }) => (
            <div key={label} className="surface rounded-3xl p-5">
              <Icon className="mb-4 h-5 w-5 text-blue-600" />
              <p className="text-sm text-muted">{label}</p>
              <p className="mt-1 text-xl font-semibold text-slate-950 dark:text-white">
                {value}
              </p>
            </div>
          ))}
        </div>

        <Overview overview={data.overview} />
        <Courses courses={data.courses} />
        <Placements average={data.averagePackage} highest={data.highestPackage} />
        <Reviews reviews={data.reviews} />
      </main>
    </>
  );
}
