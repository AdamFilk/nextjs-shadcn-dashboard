'use client';

import { DataTable } from '@/components/shared/data-table';
import { columns } from './columns';
import { Payment, payments } from '@/lib/mock';
import { useEffect, useState } from 'react';

export default function PaymentList() {
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData(payments);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} loading={loading} />
    </div>
  );
}
