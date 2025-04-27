
import React from "react";

interface ServiceCardSocialsProps {
    imageUrl?: string;
    videoUrl?: string;
    className?: string;
}

export const ServiceCardSocials: React.FC<ServiceCardSocialsProps> = ({
    imageUrl,
    videoUrl,
    className = "",
}) => (
    <div
        className={`
      border border-[rgba(205,205,205,1)] rounded-[25px] overflow-hidden
      ${className}
    `}
    >
        {videoUrl ? (
            <video
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[9/16] object-cover"
            />
        ) : imageUrl ? (
            <img
                src={imageUrl}
                alt=""
                className="w-full aspect-[9/16] object-cover"
            />
        ) : null}
    </div>
);
