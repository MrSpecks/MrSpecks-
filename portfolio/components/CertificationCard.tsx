// components/cards/CertificationCard.tsx

interface Certification {
    name: string;
    issuer: string;
    date: string;
    badgeUrl: string;
  }
  
  export default function CertificationCard({ name, issuer, date, badgeUrl }: Certification) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex items-center gap-4">
        <img src={badgeUrl} alt={`${name} badge`} className="w-16 h-16 object-contain" />
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">{issuer}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
        </div>
      </div>
    );
  }