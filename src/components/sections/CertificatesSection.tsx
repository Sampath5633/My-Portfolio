import React, { useState } from 'react';
import { Award, ChevronRight, AlignCenterVertical as Certificate, Trophy, Medal } from 'lucide-react';

interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  description: string;
  image?: string;
}

interface CertificatesSectionProps {
  certificates: CertificateItem[];
}

const CertificatesSection: React.FC<CertificatesSectionProps> = ({ certificates }) => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const getCertificateGradient = (index: number) => {
    const gradients = [
      'from-yellow-600 to-orange-600',
      'from-amber-600 to-yellow-600',
      'from-orange-600 to-red-600',
      'from-yellow-500 to-amber-600'
    ];
    return gradients[index % gradients.length];
  };

  const getCertificateIcon = (index: number) => {
    const icons = [Trophy, Medal, Award, Certificate];
    return icons[index % icons.length];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full shadow-lg">
          <Trophy className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
          Certificates
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-yellow-200 to-orange-200"></div>
      </div>

      <div className="grid gap-4">
        {certificates.map((certificate, index) => {
          const CertIcon = getCertificateIcon(index);
          return (
            <div
              key={certificate.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 transform hover:-translate-y-2 ${
                selectedCertificate === certificate.id 
                  ? 'border-yellow-500 ring-4 ring-yellow-100 scale-105' 
                  : 'border-transparent hover:border-yellow-200'
              }`}
              onClick={() => setSelectedCertificate(selectedCertificate === certificate.id ? null : certificate.id)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 bg-gradient-to-r ${getCertificateGradient(index)} rounded-lg shadow-md`}>
                        <CertIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 hover:text-yellow-600 transition-colors duration-300">
                          {certificate.name}
                        </h3>
                        <p className="text-gray-600 text-sm font-medium bg-gray-100 px-3 py-1 rounded-full w-fit mt-1">
                          {certificate.issuer}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <ChevronRight 
                    className={`w-6 h-6 text-gray-400 transition-all duration-300 ${
                      selectedCertificate === certificate.id ? 'rotate-90 text-yellow-500' : 'hover:text-yellow-400'
                    }`} 
                  />
                </div>
                
                {selectedCertificate === certificate.id && (
  <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in space-y-4">
    <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200 hover:shadow-md transition-all duration-300 cursor-default">
      <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
        <Award className="w-4 h-4" />
        Description
      </h4>
      <p className="text-yellow-700 leading-relaxed">{certificate.description}</p>
    </div>

    {certificate.image && (
      <div className="rounded-lg overflow-hidden border border-yellow-200 shadow-md">
        <img
          src={certificate.image}
          alt={`${certificate.name} certificate`}
          className="w-full object-cover"
        />
      </div>
    )}
  </div>
)}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CertificatesSection;