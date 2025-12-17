import { api } from '../api/api';
import { TypeUser, UpdateUserInfoPayload, Root, UpdateResponse } from '@/types';

export interface TypeLoginResponse {
  user: TypeUser;
  token: string;
  message: string;
  enableTwoFactor: boolean;
  type: string;
}

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Root<TypeLoginResponse>, { email: string; password: string }>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['auth'],
    }),
    //  get me user details
    getMe: builder.query<Root<TypeUser>, void>({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
      }),
      providesTags: ['auth'],
    }),
    //  update user details
    updateUserInfo: builder.mutation<
      UpdateResponse<{ message: string; user: TypeUser }>,
      UpdateUserInfoPayload
    >({
      query: (data) => ({
        url: '/auth/update-info',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['auth', 'users'],
    }),
    //  signup user
    signup: builder.mutation<
      Root<{ user: TypeUser; token: string; message: string }>,
      {
        companyName: string;
        representativeName: string;
        name: string;
        code: string;
        roleId: string;
        primaryMobile: string;
        email: string;
        gender: string;
        dateOfBirth: string;
        address: string;
        password: string;
        confirmPassword: string;
      }
    >({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['auth'],
    }),
    verifyOtp: builder.mutation<
      Root<{ message: string }>,
      {
        otp: number;
        token: string;
      }
    >({
      query: (data) => ({
        url: '/auth/verify-login',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['auth'],
    }),
    resendOtp: builder.mutation<
      Root<{ message: string; token: string }>,
      {
        token: string;
      }
    >({
      query: (data) => ({
        url: '/auth/resent-verification',
        method: 'POST',
        body: data,
      }),
    }),
    forgotPassword: builder.mutation<Root<{ token: string; message: string }>, { email: string }>({
      query: (data) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: data,
      }),
    }),
    resetPassword: builder.mutation<
      Root<{ message: string }>,
      { password: string; confirmPassword: string; otp: number; token: string }
    >({
      query: (data) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: data,
      }),
    }),
    verifyAccount: builder.mutation({
      query: (data) => ({
        url: '/auth/verify-account',
        method: 'POST',
        body: data,
      }),
    }),
    uploadProfilePicture: builder.mutation({
      query: (data) => ({
        url: '/auth/upload-profile',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['auth'],
    }),
    updatePassword: builder.mutation<
      Root<{ message: string }>,
      { password: string; currentPassword: string; confirmPassword: string }
    >({
      query: (data) => ({
        url: '/auth/change-password',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetMeQuery,
  useSignupMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useUpdateUserInfoMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useVerifyAccountMutation,
  useUploadProfilePictureMutation,
  useUpdatePasswordMutation,
} = authApi;

export type UpdateUserInfoTrigger = ReturnType<typeof useUpdateUserInfoMutation>[0];
