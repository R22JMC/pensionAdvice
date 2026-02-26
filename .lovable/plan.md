
# Fix Service Page Form Redirect to Thank You Page

## Problem Identified
The forms on all service pages are not redirecting to the Thank You page after submission. The issue is in the **ServicePageHero** component, which handles forms for:
- Pension Transfers
- Directors Pensions  
- Pension Reviews
- UK Pension Transfers
- Early Retirement
- Redundancy Pensions

The `handleFinalSubmit` function in `ServicePageHero.tsx` is missing the navigation to the thank you page. It currently only logs the form data to the console without redirecting.

## Root Cause
In `src/components/ServicePageHero.tsx`, the `handleFinalSubmit` function (line 140-144):
```text
const handleFinalSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
  // Here you would typically send to backend
};
```

This is missing:
1. The `useNavigate` hook import from `react-router-dom`
2. The actual `navigate("/thank-you")` call

## Solution
Update the `ServicePageHero.tsx` component to:

1. **Add the `useNavigate` import** from `react-router-dom`
2. **Initialize the navigate function** at the top of the component
3. **Add the navigation call** in `handleFinalSubmit` after logging the form data

---

## Technical Changes

### File: `src/components/ServicePageHero.tsx`

**Change 1 - Add import:**
Add `useNavigate` to the imports from `react-router-dom` (a new import since the file doesn't currently import from react-router-dom).

**Change 2 - Initialize hook:**
Add `const navigate = useNavigate();` at the start of the component function.

**Change 3 - Update handleFinalSubmit:**
Add `navigate("/thank-you");` after the console.log statement.

---

## Expected Result
After this fix, when users complete the two-step form on any service page:
1. Step 1: Enter contact details and click "Next"
2. Step 2: Add additional info and click "Finish"
3. User is redirected to `/thank-you` page with confirmation message

This will match the behavior of the Contact Us page and calculator forms which already work correctly.
