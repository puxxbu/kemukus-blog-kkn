"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
export default function Contact({ settings }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = settings?.w3ckey || "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Stablo Template",
      subject: "New Contact Message from Stablo Website"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
        Contact
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a here to help.</p>
      </div>

      <div className="my-10 grid md:grid-cols-2">
        <div className="flex justify-center">
          <div className="my-10">
            <h2 className="text-2xl font-semibold dark:text-white">
              Contact Stablo
            </h2>
            <p className="mt-5 max-w-sm">
              Have something to say? We are here to help. Fill up the
              form or send email or call phone.
            </p>

            <div className="mt-5">
              <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
                <MapPinIcon className="h-4 w-4" />
                <span>1734 Sanfransico, CA 93063</span>
              </div>
              {settings?.email && (
                <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
                  <EnvelopeIcon className="h-4 w-4" />
                  <a href={`mailto:${settings.email}`}>
                    {settings.email}
                  </a>
                </div>
              )}
              {settings?.phone && (
                <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
                  <PhoneIcon className="h-4 w-4" />
                  <a href={`tel:${settings.phone}`}>
                    {settings.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="my-10">
            <h2 className="text-2xl font-semibold dark:text-white">
              Contact Stablo
            </h2>
            <p className="mt-5 max-w-sm">
              Have something to say? We are here to help. Fill up the
              form or send email or call phone.
            </p>

            <div className="mt-5">
              <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
                <MapPinIcon className="h-4 w-4" />
                <span>1734 Sanfransico, CA 93063</span>
              </div>
              {settings?.email && (
                <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
                  <EnvelopeIcon className="h-4 w-4" />
                  <a href={`mailto:${settings.email}`}>
                    {settings.email}
                  </a>
                </div>
              )}
              {settings?.phone && (
                <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
                  <PhoneIcon className="h-4 w-4" />
                  <a href={`tel:${settings.phone}`}>
                    {settings.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
