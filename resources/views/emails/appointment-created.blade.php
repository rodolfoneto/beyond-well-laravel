<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New appointment request</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; margin: 0; padding: 24px; color: #1f1f1f;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden;">
        <tr>
            <td style="background: #1f4538; color: #ffffff; padding: 20px 24px; font-size: 18px; font-weight: 600;">
                New Appointment Request
            </td>
        </tr>
        <tr>
            <td style="padding: 24px;">
                <p style="margin: 0 0 16px;">A new appointment request was submitted on the website:</p>

                <table cellpadding="6" cellspacing="0" border="0" width="100%" style="font-size: 14px; border-collapse: collapse;">
                    <tr>
                        <td style="color: #6b7280; width: 140px;">Name</td>
                        <td><strong>{{ $appointment->name }}</strong></td>
                    </tr>
                    <tr>
                        <td style="color: #6b7280;">Email</td>
                        <td><a href="mailto:{{ $appointment->email }}" style="color: #0f3d2e;">{{ $appointment->email }}</a></td>
                    </tr>
                    <tr>
                        <td style="color: #6b7280;">Phone</td>
                        <td><a href="tel:{{ $appointment->phone }}" style="color: #0f3d2e;">{{ $appointment->phone }}</a></td>
                    </tr>
                    <tr>
                        <td style="color: #6b7280;">Service</td>
                        <td>{{ $appointment->service }}</td>
                    </tr>
                    @if ($appointment->population)
                        <tr>
                            <td style="color: #6b7280;">Population</td>
                            <td>{{ $appointment->population }}</td>
                        </tr>
                    @endif
                    <tr>
                        <td style="color: #6b7280;">Preferred date</td>
                        <td>{{ $appointment->preferred_date->format('Y-m-d') }} at {{ \Illuminate\Support\Str::substr($appointment->preferred_time, 0, 5) }}</td>
                    </tr>
                </table>

                @if ($appointment->notes)
                    <p style="margin: 24px 0 6px; color: #6b7280; font-size: 13px;">Notes</p>
                    <div style="padding: 12px; background: #f9fafb; border-left: 3px solid #1f4538; white-space: pre-wrap; font-size: 14px;">{{ $appointment->notes }}</div>
                @endif

                <p style="margin: 24px 0 0;">
                    <a href="{{ url('/admin/appointments/'.$appointment->id) }}"
                       style="display: inline-block; background: #0f3d2e; color: #ffffff; padding: 10px 18px; text-decoration: none; border-radius: 4px; font-size: 14px;">
                        Open in admin
                    </a>
                </p>
            </td>
        </tr>
        <tr>
            <td style="background: #f3f4f6; color: #6b7280; padding: 12px 24px; font-size: 12px; text-align: center;">
                Beyond Well Therapies
            </td>
        </tr>
    </table>
</body>
</html>
