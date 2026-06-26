import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Star, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { inr, TYPE_LABELS } from "@/lib/format";
import SaveButton from "../saved/SaveButton";
import type { College } from "@/types/college";

interface Props {
  college: College;
  index?: number;
}

export default function CollegeCard({ college, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group surface rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={college.imageUrl || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80"}
          alt={college.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <SaveButton collegeId={college.id} className="absolute top-3 right-3 w-8 h-8" />
        {college.type && (
          <Badge className="absolute bottom-3 left-3 bg-white/90 text-slate-900 hover:bg-white border-0 text-xs">
            {TYPE_LABELS[college.type] || college.type}
          </Badge>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-display text-base font-semibold text-slate-950 dark:text-white leading-snug line-clamp-2 mb-1">
          {college.name}
        </h3>
        {college.location && (
          <p className="flex items-center gap-1 text-xs text-muted mb-3">
            <MapPin className="w-3 h-3 shrink-0" /> {college.location}
          </p>
        )}

        <div className="flex items-center justify-between text-xs text-muted border-t border-slate-200 dark:border-slate-700 pt-3">
          {college.rating != null && (
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              {college.rating.toFixed(1)}
            </span>
          )}
          {college.averagePackage != null && (
            <span className="flex items-center gap-1">
              <Briefcase className="w-3 h-3" />
              {inr(college.averagePackage)}/yr
            </span>
          )}
          {college.fees != null && (
            <span>{inr(college.fees)}/yr</span>
          )}
        </div>

        <Link
          to={`/colleges/${college.id}`}
          className="mt-3 block text-center text-xs font-medium bg-blue-600 text-white rounded-lg py-2 hover:opacity-90 transition-opacity"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}